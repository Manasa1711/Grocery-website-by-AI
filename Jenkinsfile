pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Manasa1711/Grocery-website-by-AI.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building...'
                // You can add docker build here if needed
                // sh 'docker build -t grocery-image .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add test commands if available
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // You can run deployment scripts or commands here
            }
        }
    }
}
