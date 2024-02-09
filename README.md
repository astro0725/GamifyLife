# GamifyLife
Have you ever felt tired of the same old ToDo apps and need to feel like you're in an RPG finishing quests, levelling up and getting rewards? Try GamifyLife today! [Website: GamifyLife](https://gamify-todo-7c1ee43b6898.herokuapp.com)

## Table of Contents
- [Technologies](#technologies)
- [Features](#features)
- [Screenshots](#screenshots)
- [Future Development](#Development)
- [Issues](#issues)
- [Credits](#credits)
- [License](#license)

## Technologies
- MySQL/SequelizeORM
- Vanilla JavaScript
- Node.js/Express.js
- TailwindCSS/DaisyUI Kit
- Heroku/JAWSDB

## Features
- A user authentication system where you can create your own "quest" and reward system and have it saved to access anywhere
- Quest completion gives you experience to level up as coins to redeem your rewards

## Screenshots

![dash-view](./img-assets/dash-view.png)
![create-task](./img-assets/create-task.png)

## Development 
- Currently in process:
    -  The ability to edit already created tasks/rewards
    -  Reset account (e.g. reset account back to level 1 and 0 coins)
    -  Separate buttons to completely remove your to-dos and rewards respectively
    -  Implement BCRPYT to crypto passwords so that plain text passwords are not passed to the DB
    -  Integrate password change system
- Create more alerts in UI to ensure a user action, like deleting the account or deleting a task/reward.
- Eventually, integrate "due dates" to tasks that alert you when they're due.
- Add different types of to-dos like habit tracking and dailies that track your "streaks" 
- Create a more complex leveling system that uses more math as opposed to preset number settings.
- Integrate a calendar system where you can merge your calendar from different sources (e.g. Apple Calendar, Google Calendar) as well as handling own inputs.
- Create a penalty system for missing "dailies", "habits" or tasks that didn't get completed at the end of a 24-hour cycle, breaking habit streaks, or not completing a task by its due date (e.g. create a health bar that will dock HP if user misses a task or other)

## Issues
- [Level/Experience/Coins not updating on "complete" or "redeem"](https://github.com/astro0725/GamifyLife/issues/1)
- [On "complete" of task it should exclude it from the DOM](https://github.com/astro0725/GamifyLife/issues/2)
  
## Credits

Thank you to [Anson the Developer](https://www.youtube.com/@ansonthedev) for his lessons on Express Sessions. 

---

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) 
## License

This project is licensed under the MIT license. For more details, see [this link](https://opensource.org/licenses/MIT).
