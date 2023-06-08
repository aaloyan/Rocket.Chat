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
                    // Install dependencies using Yarn
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                // Build your Node.js app using Yarn
                sh 'npm build'
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests for your Node.js app using Yarn
                sh 'npm test'
            }
        }
    }
}
s