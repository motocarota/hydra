# Hydra
a CLI application that helps managing a team with Basecamp

- fetch latest data from basecamp
- synthetyze team's assigned tasks
- synthetyze team's recent activity

Sometimes it's hard to follow the progress of a whole development team, and because of this some tasks remain unfinished for a long time.

With basecamp you can see all the tasks assignments by navigating to https://3.basecamp.com/4023585/reports/todos/assigned/<developer_id> but this approach does not scale well with large teams; you need to open multiple pages, and you don't have a clear idea of the "age" of a task unless you open each one.

This tool's objective is to give you a visual representation of the team status advancement, and to never forget anymore about any past assignemnt.

```
NOTE
this project is still a work in progress, so lot of things may change without notice
```

## Instructions

```
npm install
export ACCESS_TOKEN=PASTE_ACCESS_TOKEN_HERE
export ACCOUNT_ID=999999999
```
for text format
```
npm run assigned
npm run weekly-activity
npm run monthly-activity
```

for json files
```
npm start
```
- http://localhost:3000/assigned
- http://localhost:3000/activity

## Assigned tasks
This request should help the user understand the status of each team member regarding incomplete assigned tasks.

This view is pretty useful when you have to understand who is available and when somebody is stuck/forgot about a particular task.

#### Example text
```
> npm run assigned

DEVELOPER_1
  + revert scrollbar          7 days
    fix position borders      5 days
  - change modal layout     321 days

DEVELOPER_2
  + fix order form           34 days
  + refactor login            1 days

DEVELOPER_3
  
DEVELOPER_4
    code something            3 days
```
#### Example json
```
[
  {
    name: 'DEVELOPER_1',
    tasks: [
      {
        prio: '*',
        title: 'revert scrollbar',
        days: 7,
      },
      ...
    ]
  }
]
```
## Recent Activity
This view is useful to understand the overall activity of the team members (just keep in mind that certain tasks are more expensive than many other).

### Example text

```
> npm run weekly-activity

DEVELOPER_1
  open:     +-=
  closed:   **+++++-==
  comments: 6

DEVELOPER_2
  open:     *****
  closed:   --====
  comments: 0
```
### Example json
```
[
  {
    name: 'DEVELOPER_1',
    closed: [0, 1, 1, 1],
    open:   [2, 5, 1, 2],
    comments: 6,
  },
  ...
]
```
## Priority symbols
Since Basecamp does not supports priority on tasks, I created different task groups, based on priority of the included tasks, plus a task list which includes all the changes that will be included in the upcoming release.

This is how I will encode priority into tasks:
```
*  next release
+  high
-  medium
=  low
```

## Licence
MIT
