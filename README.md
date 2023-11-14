# Login
This website is mainly made to be built into another website and not used in a signler mode.

# Downloading
1) Linux/MacOS
<br>
To download for Linux/MacOS open a terminal and type

```
git clone https://github.com/HttpAnimation/login-2.git
```
Once downloaded open the folder with any IDE and you're done.

2) Windows
<br>
To download on Windows head over to the [Main part](https://github.com/HttpAnimation/login-2) of this Github then click Code and Download zip open finder and extract the zip file then open it with any IDE.


# Defaults
The default login for this project is
```
Username = Admin
Password = Password
```

# Changing login
To change the login of the website use any IDE for this i'll use nano and open the [Data.ini](https://github.com/HttpAnimation/login-2/blob/gh-pages/Data.ini) file for nano this is gonna be the following command.
```
nano Data.ini
```
Once opened, change 
```
Username = Admin
Password = Password
```
to the data you wanna use for this exp let's use
```
Username = HttpAnimations
Password = HackMePLS
```

# Live preview/use case
If you would like to see this project in action you can view this website [here](https://httpanimation.github.io/login-2/) for the single build. <br>
If you would like to see this project in action for a real use look at this repo [here](https://github.com/HttpAnimation/Hicup) this is the repo that this project was made for.

# Adding to a website
If you would like to add this to you're webiste make sure to edit Data.ini and replace 
```
        if (parsedData.user === username && parsedData.pass === password) {
          window.location.href = "https://exp.com";
        } else {
          alert("Invalid credentials. Please try again.");
        }
```
in script.js with the data you want it to do/use for the most case tho just change https://exp.com with /main.html or what ever you're site is for better protection make it so if you are not redieracted to hte site by the certian url it will take you back to index.html.

# Other
Note that is really made just to be a show case on how you could do it with out PHP code and if you are using PHP code it is gonna be way safer just to use that but for this, this is really just to be a way to put it on websites that don't want people to get to that easly.