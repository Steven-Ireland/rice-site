import React, { Component } from 'react';
import Terminal from './Terminal';
import Signup from './Signup';
import Logo from './Logo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Terminal title="Your dotfiles can be messy."> <p>
          drwx------  9 rice users 4096 Jul 22 19:51 . <br/>
          drwxr-xr-x  4 root root  4096 Jul 20 10:30 .. <br/>
          -rw-------  1 rice users 0705 Jul 22 19:07 .bash_history<br/>
          -rw-r--r--  1 rice users 0021 Feb 14 08:16 .bash_logout<br/>
          -rw-r--r--  1 rice users 0057 Feb 14 08:16 .bash_profile<br/>
          -rw-r--r--  1 rice users 0700 Jul 20 10:29 .bashrc<br/>
          drwxr-xr-x  6 rice users 4096 Jul 22 19:18 .cache<br/>
          drwx------  3 rice users 4096 Jul 22 19:50 .config<br/>
          -rw-r--r--  1 rice users 0045 Jul 20 10:31 .dmrc<br/>
          drwxr-xr-x  2 rice users 4096 Jul 21 20:54 .electron<br/>
          -rw-------  1 rice users 0016 Jul 20 10:31 .esd_auth<br/>
          drwxr-xr-x  3 rice users 4096 Jul 20 10:31 .kde4<br/>
          drwxr-xr-x  3 rice users 4096 Jul 20 10:31 .local<br/>
          drwxr-xr-x  4 rice users 4096 Jul 21 20:52 .node-gyp<br/>
          drwxr-xr-x  5 rice users 4096 Jul 21 20:45 .npm<br/>
          drwx------  3 rice users 4096 Jul 20 10:44 .pki<br/>
          drwxr-xr-x  3 rice users 4096 Jul 22 19:07 .vscode<br/>
          -rw-------  1 rice users 0050 Jul 22 18:56 .Xauthority<br/>
          -rw-r--r--  1 rice users 0014 Jul 20 10:29 .xinitrc<br/>
          -rw-------  1 rice users 3479 Jul 22 19:45 .xsession-errors<br/>
          -rw-------  1 rice users 1725 Jul 21 20:53 .xsession-errors.old<br/>
          -rw-r--r--  1 rice users 0116 Jul 21 20:51 .yarnrc<br/></p>
        </Terminal>

        <Terminal title="But managing them doesn't have to be."><p>
          rice save .Xresources personal-theme</p>
        </Terminal>

        <Terminal title="Install new themes with one command.">
          <p>rice install ricesh/demo</p>
        </Terminal>
        
        <Terminal>
          <Logo/>
        </Terminal>
        <Signup title="Want some more info?"/>

      </div>
    );
  }
}

export default App;
