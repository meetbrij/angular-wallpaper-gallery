# Angular Image Gallery

An Angular Image Gallery developed by cloning [angular-seed](https://github.com/angular/angular-seed) (boilerplate) repo using the following tools:
- node and npm
- gulp
- angular-seed
- bower
- bootstrap

clone angular-seed repo

`git clone --depth=1 https://github.com/angular/angular-seed.git <your-project-name>`

Using the above method creates a shallow clone which leads to the following error when you try to push the files into a new repo
`[remote rejected] master -> master (shallow update not allowed)`

To resolve the issue above follow this link on [stackoverflow](http://stackoverflow.com/questions/28983842/remote-rejected-shallow-update-not-allowed-after-changing-git-remote-url)

so better use 
`git clone https://github.com/angular/angular-seed.git`

still better
download copy and use it in your repo

Change to your project folder and run the following commands
```
npm install
npm start
```

The above project was created by following the steps given in the tutorial at [Eduonix](https://www.udemy.com/learn-angularjs-development/)
