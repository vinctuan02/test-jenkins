pipeline {
    agent any

    stages {
        stage('Hello world') {
            steps {
                echo 'Hello world'
            }
        }

        stage('Build and run container') {
            steps {
                sh 'docker build -t demo1:tag1 .'
                sh 'docker run --platform linux/amd64 --name demo1 -p 3000:8080 -d demo1:tag1'
            }
        }
    }

}
