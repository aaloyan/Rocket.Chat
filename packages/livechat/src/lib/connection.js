import i18next from 'i18next';

import { Livechat } from '../api';
import store from '../store';
import constants from './constants';
import { loadConfig } from './main';
import { loadMessages } from './room';

let self;
let connectedListener;
let disconnectedListener;
let initiated = false;
const { livechatDisconnectedAlertId, livechatConnectedAlertId } = constants;
const removeListener = (l) => l.stop();

const Connection = {
	async init() {
		if (initiated) {
			return;
		}

		initiated = true;
		self = this;
		await this.connect();
	},

	async connect() {
		try {
			this.clearListeners();
			await loadConfig();
			await import('../i18next');
			// await Livechat.connection.connect();
			this.addListeners();
			this.clearAlerts();
		} catch (e) {
			console.error('Connecting error: ', e);
		}
	},

	// reconnect() {
	// 	if (timer) {
	// 		return;
	// 	}
	// 	timer = setTimeout(async () => {
	// 		try {
	// 			clearTimeout(timer);
	// 			timer = false;
	// 			await this.connect();
	// 			await loadMessages();
	// 		} catch (e) {
	// 			console.error('Reconecting error: ', e);
	// 			this.reconnect();
	// 		}
	// 	}, 5000);
	// },

	async clearAlerts() {
		const { alerts } = store.state;
		await store.setState({ alerts: alerts.filter((alert) => ![livechatDisconnectedAlertId, livechatConnectedAlertId].includes(alert.id)) });
	},

	async displayAlert(alert = {}) {
		const { alerts } = store.state;
		await store.setState({ alerts: (alerts.push(alert), alerts) });
	},

	async handleConnected() {
		await self.clearAlerts();
		await self.displayAlert({ id: livechatConnectedAlertId, children: i18next.t('livechat_connected'), success: true });
		await loadMessages();
	},

	async handleDisconnected() {
		await self.clearAlerts();
		await self.displayAlert({ id: livechatDisconnectedAlertId, children: i18next.t('livechat_is_not_connected'), error: true, timeout: 0 });
		// self.reconnect();
	},

	addListeners() {
		if (!connectedListener) {
			connectedListener = Livechat.connection.on('connected', this.handleConnected);
		}

		if (!disconnectedListener) {
			disconnectedListener = Livechat.connection.on('disconnected', this.handleDisconnected);
		}
	},

	clearListeners() {
		if (connectedListener) {
			connectedListener.then(removeListener);
			connectedListener = false;
		}

		if (disconnectedListener) {
			disconnectedListener.then(removeListener);
			disconnectedListener = false;
		}
	},
};

export default Connection;
