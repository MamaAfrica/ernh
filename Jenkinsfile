pipeline{
    agent {
        node{
            label 'docker-agent-node'
        }
    }
    stages{
        stage('Add .env'){
            steps{
            sh ''' 
            rm -rf *.tar.gz
            echo 'PASSWORD=${earnhivePASSWORD}' > .env
            echo 'NAME=${earnhiveNAME}' >> .env
            echo 'DB=${earnhiveDB}' >> .env
            echo 'CLOUDINARY_CLOUD_NAME=${earnhiveCLOUDINARY_CLOUD_NAME}' >> .env
            echo 'CLOUDINARY_KEY=${earnhiveCLOUDINARY_KEY}' >> .env
            echo 'CLOUDINARY_SECRET=${earnhiveCLOUDINARY_SECRET}' >> .env
            '''
            }
        }
        stage('Package'){
            steps{
                sh '''
                tar czf earnhive-$BUILD_NUMBER.tar.gz component model .env pages public styles utils jsconfig.json next.config.js package-lock.json package.json deploy.sh
                '''
            }
        }
        stage('Deploy'){
            steps{
                sshPublisher(
                    publishers: [
                    sshPublisherDesc(
                    configName: 'earnhiveserver', 
                    transfers: [sshTransfer(
                    cleanRemote: false, excludes: '', 
                    execCommand: '''sudo mv /home/ubuntu/earnhive-*.tar.gz /var/www/earnhive/;
                    cd /var/www/earnhive/;
                    sudo tar -xf earnhive-*.tar.gz;
                    pwd;
                    echo $SHELL
                    echo $PATH;
                    cat ~/.bashrc;
                    echo export PATH=$PATH:/home/ubuntu/.nvm/versions/node/v20.5.1/bin >> ~/.bashrc;
                    cat ~/.bashrc;
                    source ~/.bashrc;
                    echo $PATH;
                    sudo chmod +x deploy.sh;
                    ./deploy.sh; 
                    ''', 
                    execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, 
                    patternSeparator: '[, ]+', remoteDirectory: '', remoteDirectorySDF: false, removePrefix: '', 
                    sourceFiles: '**/*.gz')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: true)
                    ]
                )
            }
        }
    }
}