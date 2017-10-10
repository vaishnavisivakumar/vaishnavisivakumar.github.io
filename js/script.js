var commandText = function (text) {
    return "[[g;#EEEEEE;]" + text + "]";
};

var titleText = function (text) {
    return "[[u;inherit;]" + text + "]";
};


var App = {
    intro: function (ret) {
        if (typeof ret === 'undefined') {
            ret = false;
        }
        var greetText = "> Hello!";
        if (!ret) {
            this.echo(greetText);
        } else {
            return greetText;
        }
    },
    ls: function () {
        this.echo("|  No files to show! Use download command to download the Résumé.");
    },
    rm: function (command) {
        this.echo();
        this.echo("|  Oh no!! don't delete that!");
        this.echo();
    },
    cd: function (command) {
        if (command) {
            this.exec(command);
        } else {
            this.echo("|  directory is not selected.");
        }
    },
    find: function (command) {
        if (command) {
            this.exec(command);
        } else {
            this.echo("|  Please enter what you are looking for.");
        }
    },
    grep: function (command) {
        if (command) {
            this.exec(command);
        } else {
            this.echo("|  Please enter what you are looking for.");
        }
    },
    help: function () {
        this.exec('menu');
    },
    menu: function () {
        this.echo();
        this.echo("|  " + commandText("about") + "              - About Me");
        this.echo("|  " + commandText("skills") + "             - Technical Proficiencies");
        this.echo("|  " + commandText("experience") + "         - Professional Experience");
        this.echo("|  " + commandText("projects") + "           - Academic projects");
        this.echo("|  " + commandText("education") + "          - Related Coursework");
        this.echo("|  " + commandText("contact") + "            - Contact details");
        this.echo("|  " + commandText("resume") + "             - View Résumé/Use "+commandText("download")+" to download the Résumé;");
        // this.echo("|");
        //  this.echo("|  " + commandText("all") + "                - [[b;#00DE12;]Run all commands (recommended)]");
        this.echo();
    },
    contact: function () {
        this.echo();
        this.echo("|  " + commandText("LinkedIn") + ":     https://www.linkedin.com/in/vaishnavisivakumar/");
        this.echo("|  " + commandText("Email") + ":        vaish92.cbe@gmail.com");
        this.echo("|  " + commandText("Mobile") + ":       +1(832)670-8548");
        this.echo();
    },
    github: function () {
        this.echo("|  Sorry! No Github link at this time.");
    },

    linkedin: function () {
        this.echo();
        this.echo("|  https://www.linkedin.com/in/vaishnavisivakumar/");
        this.echo();
    },
    experience: function () {
        this.exec('work');
    },
    works: function () {
        this.exec('work');
    },
    work: function () {
        this.echo();
        this.echo("|  " + commandText('NASA Fitness LLC., (Houston, TX; September 2015 – July 2016)') + "                            ");
        this.echo("|    Software Development Intern – Project Manager");
        this.echo("|    Key Highlights – Web application | Agile | Spring MVC | Java | Maven | Spring MVC | MS SQL | Gradle | Tomcat");
        this.echo("|");
        this.echo("|  " + commandText('Virtusa Software Services Pvt. Ltd., (Chennai, India; May 2014 – January 2016)') + "                            ");
        this.echo("|    Software Engineer");
        this.echo("|    Key Highlights – Web application | Agile | Spring MVC | Java | XML | Data publishing activities | Java development | Jenkins");
        this.echo("|");
        this.echo("|  " + commandText('Virtusa Software Services Pvt. Ltd., (Chennai, India; May 2014 – January 2016)') + "                            ");
        this.echo("|    Associate Software Engineer – Campus Worker");
        this.echo("|    Key Highlights – Web application | Agile | Spring MVC | Java | SQL | AWS EC2 | Quartz | SVN");
        this.echo("|");
        this.echo("|  " + commandText('Students’ Guild of Service (SGS), Dr. Mahalingam College., (Coimbatore, India; January 2013 – September 2013)') + "                            ");
        this.echo("|    Web Development Coordinator – Volunteer work");
        this.echo("|    Key Highlights – Web application | Front-end | HTML | CSS | Bootstrap | jQuery | Photoshop");
        this.echo();
    },
    whoami: function () {
        this.exec('about');
    },
    about: function () {
        this.echo();
        this.echo("|  Name:         " + commandText('Vaishnavi Sivakumar'));
        this.echo("|");
        this.echo("|  About:        I am a recent University of Houston " + commandText('M.S. graduate') + " with strong background and experience in " + commandText('Software development and maintenance') + ".");
        this.echo("|                I am a person who thrives in a fast phase environment.");
        this.echo("|                Right now, I am looking for an opportunity to apply my technological expertise along with creative problem solving skills at an innovative company.");
        this.echo();
    },
    project: function () {
        this.exec('projects');
    },
    projects: function () {
        this.echo();
        this.echo("|  Under construction ");
        this.echo();
    },
    skill: function () {
        this.exec('skills');
    },
    skills: function () {
        this.echo();
        this.echo("|  [[g;#B2D100;]Languages] ");
        this.echo("|  " + commandText('C') + "                      [[g;#D13F00;]8+ years ");
        this.echo("|  " + commandText('C++') + "                    [[g;#D13F00;]6+ years ");
        this.echo("|  " + commandText('Java') + "                   [[g;#D13F00;]5+ years ");
        this.echo("|  " + commandText('Swift') + "                  [[g;#D13F00;]2+ years ");
        this.echo("|  " + commandText('C#') + "                     [[g;#D13F00;]2+ years ");
        this.echo("|");
        this.echo("|  [[g;#B2D100;]Java Technologies] ");
        this.echo("|  " + commandText('Core Java') + "              [[g;#D13F00;]5+ years ");
        this.echo("|  " + commandText('Spring') + "                 [[g;#D13F00;]3+ years ");
        this.echo("|  " + commandText('J2EE') + "                   [[g;#D13F00;]5+ years ");
        this.echo("|  " + commandText('jUnit') + "                  [[g;#D13F00;]6+ years ");
        this.echo("|  " + commandText('REST') + "                   [[g;#D13F00;]3+ years ");
        this.echo("|  " + commandText('AWS') + "                    [[g;#D13F00;]2+ years ");
        this.echo("|");
        this.echo("|  [[g;#B2D100;]Database] ");
        this.echo("|  " + commandText('SQL') + "                    [[g;#D13F00;]8+ years ");
        this.echo("|  " + commandText('Oracle') + "                 [[g;#D13F00;]6+ years ");
        this.echo("|");
        this.echo("|  [[g;#B2D100;]Front-end] ");
        this.echo("|  " + commandText('HTML/XHTML') + "             [[g;#B3R100;]8+ years ");
        this.echo("|  " + commandText('CSS') + "                    [[g;#D13F00;]8+ years ");
        this.echo("|  " + commandText('JavaScript/jQuery') + "      [[g;#D13F00;]8+ years ");
        this.echo("|  " + commandText('Bootstrap') + "              [[g;#D13F00;]6+ years ");
        this.echo("|  " + commandText('Ajax') + "                   [[g;#D13F00;]5+ years ");
        this.echo("|  " + commandText('Angular JS') + "             [[g;#D13F00;]2+ years ");
        this.echo("|");
        this.echo("|  [[g;#B2D100;]Scripting Languages] ");
        this.echo("|  " + commandText('Unix Shell') + "             [[g;#D13F00;]5+ years ");
        this.echo("|  " + commandText('PHP') + "                    [[g;#D13F00;]4+ years ");
        this.echo("|");
        this.echo("|  [[g;#B2D100;]Tools/Utilities] ");
        this.echo("|  " + commandText('UML, Gradle, Hibernate, Maven, GitHub(Git), SVN, MATLAB, Xcode, Eclipse'));
        this.echo();
    },
    credit: function () {
        this.exec('credits');
    },
    credits: function () {
        this.echo();
        this.echo("|  Site built by " + commandText('Vaishnavi Sivakumar'));
        this.echo("|  Using " + commandText('Jquery Terminal Emulator') + " by " + commandText('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
        this.echo();
    },
    education: function () {
        this.echo();
        this.echo("|  [[g;#B2D100;]Master of Science");
        this.echo("|  Major        " + commandText('Computer Science'));
        this.echo("|  University   " + commandText('University of Houston - Clear Lake') + " - Houston, TX; (January 2016 – August 2017)");
        this.echo("|");
        this.echo("|  [[g;#B2D100;]Bachelor of Technology");
        this.echo("|  Major        " + commandText('Information Technology'));
        this.echo("|  University   " + commandText('Anna University') + " - Chennai, India; (August 2010 – May 2014)");
    },
    cls: function () {
        this.clear();
    },
    clear: function () {
        this.clear();
    },
    echo: function (command) {
        this.echo(command);
    },
    all: function () {
        this.clear();
        this.echo();
        this.exec('about');
        this.exec('skills');
        this.exec('work');
        this.exec('projects');
        this.exec('education');
        this.exec('contact');
    },
    sudo: function () {
        this.exec('login');
    },
    login: function () {
        this.echo();
        this.echo("|  login function currently under development");
        this.echo();
    },
    du: function () {
        this.echo();
        this.echo("|  100%");
        this.echo();
    },
    mv: function () {
        this.echo();
        this.echo("|  dont't move!");
        this.echo();
    },
    pwd: function () {
        this.echo();
        this.echo("|  None");
        this.echo();
    },
    cp: function () {
        this.echo();
        this.echo("|  dont't copy!");
        this.echo();
    },
    mkdir: function () {
        this.echo();
        this.echo("|  mkdir function currently under development");
        this.echo();
    },
    mobile: function () {
        that.clear();
        that.echo("Access with desktop for more!");
        that.echo();
    },
    resume: function () {
        window.open("./Vaishnavi Sivakumar.pdf");
    },
    download: function () {
       document.getElementById("dwn").click(); 
    },
};

jQuery(document).ready(function ($) {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('body').terminal(App, {
            greetings: function (cb) {
                that = this;
                // cb(App.intro(true));
                cb(App.mobile());
            },

            onBlur: function () {
                // prevent loosing focus
                return false;
            },
            completion: true,
            checkArity: false
        });
    } else {
        $('body').terminal(App, {
            greetings: function (cb) {
                cb(App.intro(true));
            },

            onBlur: function () {
                // prevent loosing focus
                return false;
            },
            completion: true,
            checkArity: false
        });
    }
});