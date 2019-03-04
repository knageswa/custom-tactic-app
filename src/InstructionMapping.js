import{  
    Instructions,
    Roles
 }from './EnumList.js'; 
 
 const mapping =[  
    {  
       role:Roles.LB,
       "x":0,
       "y":1,
       instructions:[  
          {  

             [  
                Instructions.AttackingRuns
             ]:[  
                "Join the Attack",
                "Balanced Attack",
                "Stay back while Defending"
             ],
             selected:0
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          },
          {  
             [  
                Instructions.RunType
             ]:[  
                "inverted",
                "Mixed Attack",
                "Overlap"
             ],
             selected:0
          }
       ]
    },
    {  
       role:Roles.LCB,
       "x":1,
       "y":1,
       instructions:[  
          {             

             [  
                Instructions.AttackingSupport
             ]:[  
                "Stay back while Attacking",
                "Balanced Attack",
                "Get Forward"
             ],
             selected:0
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          }
       ]
    },
    {  
       role:Roles.CB,
       "x":2,
       "y":1, 
       instructions:[
        { 

            [  
               Instructions.AttackingSupport
            ]:[  
               "Stay back while Attacking",
               "Join the attack",
               "Play as Striker"
            ]
            ,selected:0
         },  
          {  
            [Instructions.Interception]:
             [  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          }
 
       ]
    },
    {  
       role:Roles.RCB,
       "x":3,
       "y":1,  
       instructions:[  
          {

             [  
                Instructions.AttackingSupport
             ]:[  
                "Stay back while Attacking",
                "Join the attack",
                "Play as Striker"
             ],
             selected:0
          },
          {  
             [  
                Instructions.Interception
             ]:
             [  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          }
 
       ]
    },
    {  
       role:Roles.CDM,
       "x":2,
       "y":2, 
       instructions:[  
          {
 
             [  
                Instructions.AttackingSupport
             ]:[  
                "Stay back while Attacking",
                "Balanced Attack",
                "Get Forward"
             ],
             selected:0
          },
          {  
             [  
                Instructions.DefensiveBehaviour
             ]:[  
                "cut passing lanes",
                "balanced Defense",
                "Man mark"
             ],
             selected:0
          },
          {  
             [  
                Instructions.DefensivePosition
             ]:[  
                "cover center",
                "cover wing"
             ],
             selected:0
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          },
          {  
             [  
                Instructions.PositionFreedom
             ]:[  
                "Free Roam",
                "Stick to Position"
             ],
             selected:0
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             selected:0
          },
 
       ]
    },
    {  
       role:Roles.LM,
       "x":0,
       "y":3, 
       instructions:[  
          {
 
             [  
                Instructions.ChanceCreation
             ]:[  
                "Stay Wide",
                "Balanced",
                "Cut Inside"
             ],
             selected:0
          },
          {  
             [  
                Instructions.DefensiveSupport
             ]:[  
                "come back on Defense",
                "Basic Defense Support",
                "stay forward"
             ],
             selected:0
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          },
          {  
             [  
                Instructions.PositionFreedom
             ]:[  
                "Free Roam",
                "Stick to Position"
             ],
             selected:0
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             selected:0
          },
          {  
             [  
                Instructions.SupportRuns
             ]:[  
                "Come Short",
                "Get in Behind"
             ],
             selected:0
          }
       ]
    },
    {  
       role:Roles.LCM,
       "x":1,
       "y":3,  
       instructions:[  
          {

             [  
                Instructions.AttackingSupport
             ]:[  
                "Stay back while Attacking",
                "Balanced Attack",
                "Get Forward"
             ],
             selected:0
          },
          {  
             [  
                Instructions.DefensivePosition
             ]:[  
                "cover center",
                "cover wing"
             ],
             selected:0
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          },
          {  
             [  
                Instructions.PositionFreedom
             ]:[  
                "Free Roam",
                "Stick to Position"
             ],
             selected:0
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             selected:0
          }
       ]
    },
    {  
       role:Roles.CM,
       "x":2,
       "y":3, 
       instructions:[  
          {
 
             [  
                Instructions.AttackingSupport
             ]:[  
                "Stay back while Attacking",
                "Balanced Attack",
                "Get Forward"
             ],
             selected:0
          },
          {  
             [  
                Instructions.DefensivePosition
             ]:[  
                "cover center",
                "cover wing"
             ],
             selected:0
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          },
          {  
             [  
                Instructions.PositionFreedom
             ]:[  
                "Free Roam",
                "Stick to Position"
             ],
             selected:0
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             selected:0
          }
       ]
    },
    {  
       role:Roles.RCM,
       "x":3,
       "y":3,
       instructions:[  
          {


             [  
                Instructions.AttackingSupport
             ]:[  
                "Stay back while Attacking",
                "Balanced Attack",
                "Get Forward"
             ],
             selected:0
          },
          {  
             [  
                Instructions.DefensivePosition
             ]:[  
                "cover center",
                "cover wing"
             ],
             selected:0
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          },
          {  
             [  
                Instructions.PositionFreedom
             ]:[  
                "Free Roam",
                "Stick to Position"
             ],
             selected:0
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             selected:0
          }
       ]
    },
    {  
       role:Roles.RM,
       "x":4,
       "y":3, 
       instructions:[  
          {
 
             [  
                Instructions.ChanceCreation
             ]:[  
                "Stay Wide",
                "Balanced",
                "Cut Inside"
             ],
             selected:0
          },
          {  
             [  
                Instructions.DefensiveSupport
             ]:[  
                "come back on Defense",
                "Basic Defense Support",
                "stay forward"
             ],
             selected:0
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             selected:0
          },
          {  
             [  
                Instructions.SupportRuns
             ]:[  
                "Come Short",
                "Get in Behind"
             ],
             selected:0
          }
       ]
    },
    {  
       role:Roles.LW,
       "x":0,
       "y":5, 
       instructions:[  
          {
 
             [  
                Instructions.ChanceCreation
             ]:[  
                "cut inside",
                "balanced Width",
                "stay wide",
                "Free Roam"
             ],
             selected:0
          },
          {  
             [  
                Instructions.DefensiveSupport
             ]:[  
                "come back on Defense",
                "Basic Defense Support",
                "stay forward"
             ],
             selected:0
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             selected:0
          },
          {  
             [  
                Instructions.SupportRuns
             ]:[  
                "Come Short",
                "Get in Behind",
                "Target Man"
             ],
             selected:0
          }
       ]
    },
    {  
       role:Roles.LS,
       "x":1,
       "y":6,  
       instructions:[  
          {

             [  
                Instructions.AttackingRuns
             ]:[  
                "Get In Behind",
                "Mixed Attack",
                "Target Man",
                "False 9"
             ],
             selected:0
          },
          {  
             [  
                Instructions.DefensiveSupport
             ]:[  
                "come back on Defense",
                "Basic Defense Support",
                "stay forward"
             ],
             selected:0
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          }
       ]
    },
    {  
       role:Roles.ST,
       "x":2,
       "y":6,  
       instructions:[  
          {

             [  
                Instructions.AttackingRuns
             ]:[  
                "Get In Behind",
                "Mixed Attack",
                "Target Man",
                "False 9"
             ],
             selected:0
          },
          {  
             [  
                Instructions.DefensiveSupport
             ]:[  
                "come back on Defense",
                "Basic Defense Support",
                "stay forward"
             ],
             selected:0
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          }
       ]
    },
    {  
       role:Roles.RS,
       "x":3,
       "y":6,  
       instructions:[  
          {

             [  
                Instructions.AttackingRuns
             ]:[  
                "Get In Behind",
                "Mixed Attack",
                "Target Man",
                "False 9"
             ],
             selected:0
          },
          {  
             [  
                Instructions.DefensiveSupport
             ]:[  
                "come back on Defense",
                "Basic Defense Support",
                "stay forward"
             ],
             selected:0
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             selected:0
          }
       ]
    }
 ];

 export default mapping;