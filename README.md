# 07 Node.js Challenge: Professional README Generator

## Description


This application was created using node.js. It generates a professional README.md doc based on user input into the command line. Using an inquierer prompt the user is taken through a series of questions deisgned to fill out the README. The user has the option to fill in and select answers throughout the prompt. The user is prompted to fill in the following to generate the README:
- Title
- Description
- Installation
- Usage
- Licenses
- How to Contribute
- Testing
- Contact Information (GitHub & Email)

This ensures the user doesn't need to worry about following the proper syntac creating a README since it is already stored in the function and they will be prompted in order to fill out what they need.


## Challenges

```md
This was the first time I built something without being able to link to the internet and immediately view the additions/changes I made in the application. That was a learning curve while testing, when something crashed it was a little more difficult to go back and forth.

I ran into a problem at the end where my page generating my README.md file was only printing text. For example, the badge icons and links for licenses were not displaying correctly. I thought it was something wrong with the the functions where I created the badge and link, but it turned out to be the function generating the actual markdown. I had my Headers tabbed over too far, etc so the page wasn't displaying how it normally should. Once I corrected that, I was able to fix the smaller details that needed changing.
```

## Successes

```md
I was able to successfully import the libraries I needed to use for the inquirer.

I was able to learn how to install the correct package.json files and add the correct "type" into them.

This project was a good reminder on using git and GitHub: creating and cloning repositories, git add ., git add -A, git commit, and pushing frequently. 

This project also was a great reminder on the purpose of .gitignores.

Once I was able to figure out the prompting, the rest of the application came along quickly. I liked learning the different types of node inquirers and prompts.
```

## Installation

1. Clone repo: git clone: [git@github.com:jakewalter080/README-Generator.git](git@github.com:jakewalter080/README-Generator.git)

2. Open in VS Code (Install if you do not have it).

3. Make sure you are in the root directory 'README-Generator' > 'Develop'

4. You're ready to test!

## Usage

After installation is compete, go to your terminal and run:
```md
node index.js
```
Answer the prompts by typing in or scrolling up and down with your arrow keys. Once you fill in all the questions you should see a message saying:
```md
Successfully generated: README.md !
```

You will see your generated README.md in the 'Develop' Folder.

## Screen Recording

[LINK](https://drive.google.com/file/d/1WUzPk-BYhKuZda6RpcUhkuyCvMM54QBc/view?usp=drive_link)

## Contributing

Thank you for your interest, if you would like to contribute reach out to me via email, or make additions on a feature branch for review.

## Tests

Test this app in VS Code. Open the terminal, move into root directory 'Develop', run 'node index.js'. Answer the prompts and preview your README in the 'Develop' folder

##

Please feel free to contact me at:

[GitHub](https://github.com/jakewalter080)

[Email: jakewalter080@gmail.com](https://jakewalter080@gmail.com)
