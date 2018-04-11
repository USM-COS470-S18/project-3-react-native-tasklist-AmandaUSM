# TaskList
TaskList is a shell of a mockup of a task list app. It loads pre-defined tasks in a list with a 
completed switch and a due date. I used a switch instead of a checkbox, because checkboxes are not 
supported as components in android. Switches are the prefered UI element for binary choices according 
to material design standards. When you switch a task as completed, it strikes through, visualy indecating 
it's completeness.

## Getting Started
Once you have downloaded the project, you can run it using react-native in an android emulator. 

#### 1. Open Android Studio and find the Android Virtual Device Manager. Here, you can create and run 
an emulation device. Select a device to run.

#### 2. Once you have an android virtual device running, you can run the app using react-native. In 
your command line tool, navigate to the TaskList root directory. Here, you can run the app on the 
android virtual device using `react-native run-android`. You may have to install react-native, using 
`npm install react-native`.

## Lesson Learned
React-native was a challenge to work with. I was disapointed that the platform restricted many of the things 
that I enjoy about working in JavaScript and HTML frameworks. I don't think this would be my first choice 
of platform for developing a mobile app.

I had a hard time getting things set up and trying to figure out how to handle the data passing. I was 
not able to figure out how update the data using the FlatList. I feel like react-native is a powerful 
platform with a bit of a learning curve.

Overall, I think react-native is probably a powerful platform once you learn how to work with it, but I 
found it difficult to work with. It would benifit by more documentaiton and tutorials. For simple apps, 
I would prefer to use a platform that lets me take advantage of traditional HTML elements, as well as 
familiar JavaScript and CSS libraries. However, these platforms do have limitations, and they often 
run into problems when building larger or more complex apps. I think that react-native aims to target 
this audience.
