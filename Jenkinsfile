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
                    // Install dependencies using npm or yarn
                    sh 'yarn install'
                }
                sh 'cd /var/lib/jenkins/workspace/Fork-rocket && yarn install'  // Replace with your actual workspace path
            }
        }

        // Rest of the stages...
    }
}
