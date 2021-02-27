# Lingumi

## Getting started

```bash
git clone https://github.com/eklchan/lingumi.git
npm install
npm run start 
```
Install Expo on your Mobile Phone and scan the QR code on the terminal. 

## Tech

- React Native
- TypeScript
- Expo Client

## Q&A
Thinking about what users might want to do with this application, if you could
extend the features, what would you add and why?
- A Recents Videos Watched and a Favourites Video tab saved to the local storage of the device for a better user experience
- Categorize lessons to their relevant topic e.g. Work, Home, Animals, School. Within each topic ordered learning for the student, so Learn => Activity => Challenge => Story => Test ( I assume that's a good order) essentially there is some sort of learning roadmap.
- A profile or Authentication to save and track the users progress in the long term
- A contact page to contact Lingumi HR
- Push notifications to remind the student to keep studying! 

If you were going to make this ready to ship to production, what other tools
or systems would you want to put in place, and why?

- Testing process - QA quality assurance ensures that the product that goes into production is of a good standard. Core features are maintained, new features don't break old features.
- I would ensure that there is a good QA process in places, ideally there would be an increase in test coverage. 
- The new code has gone through a code review process so it is checked by all engineers. 
- Code review, CI/CD pipeline, Linting and formatting and a good QA process.

## Notes

- I only own an Android device, I do not know how this would render on an iOS device. 
- I did not have enough time to set up Jest Testing for Expo


