# Hydra
a CLI application that helps managing a team with Basecamp

- fetch latest data from basecamp
- synthetyze team's assigned tasks
- synthetyze team's recent activity

## Instructions

```
npm install
export ACCESS_TOKEN=PASTE_ACCESS_TOKEN_HERE
export ACCOUNT_ID=999999999
npm start
```

for text format
- http://localhost:3000/assigned
- http://localhost:3000/activity

for json files
- http://localhost:3000/json/assigned
- http://localhost:3000/json/activity

## Assigned tasks
This request should help the user understand the status of each team member regarding incomplete assigned tasks.

This view is pretty useful when you have to understand who is available and when somebody is stuck/forgot about a particular task.

#### Example text
```
FRED
  + revert scrollbar          7 days
    fix position borders      5 days
  - change modal layout     321 days

RAMA
  + fix order form           34 days
  + refactor login            1 days

JAMES
  
VLAD
    code something            3 days
```
#### Example json
```
[
  {
    name: 'FRED',
    tasks: [
      {
        prio: 1,
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
weekly recap:

FRED
  open:     + - =
  closed:   ** +++++ - ==
  comments: 6

RAMA
  open:     *****
  closed:   -- ====
  comments: 0
```
### Example json
```
[
  {
    name: 'Fred',
    closed: [0, 1, 1, 1],
    open:   [2, 5, 1, 2],
    comments: 6,
  },
  ...
]
```
## Priority symbols
```
0  *  next release
1  +  high
2  -  medium
3  =  low
```

## Licence
MIT