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
                dir('') {
                    sh 'npm install'
                // Install dependencies using npm or yarn
                sh 'cd $WORKSPACE && npm install'  // or 'yarn install'
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
