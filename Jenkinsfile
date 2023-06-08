pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install dependencies using npm or yarn
                sh 'install npm'  // or 'yarn install'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install dependencies using npm or yarn
                sh 'npm install'  // or 'yarn install'
            }
        }

        stage('Build') {
            steps {
                // Build your JavaScript app
                sh 'npm run build'  // or 'yarn build'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests for your JavaScript app
                sh 'npm run test'  // or 'yarn test'
            }
        }
    }
}
