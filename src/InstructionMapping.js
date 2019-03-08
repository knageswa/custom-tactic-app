import{  
    Instructions,
    Roles
 }from './EnumList.js'; 
 
 const mapping =[  
    {  
       role:Roles.LB,
       "x":0,
       "y":1,
       selectedInstruction:[1,1,1],
       instructions:[  
          {  

             [  
                Instructions.AttackingRuns
             ]:[  
                "Join the Attack",
                "Balanced Attack",
                "Stay back while Defending"
             ],
            
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             
          },
          {  
             [  
                Instructions.RunType
             ]:[  
                "inverted",
                "Mixed Attack",
                "Overlap"
             ],
             
          }
       ]
    },
    {  
       role:Roles.LCB,
       "x":1,
       "y":1,
       selectedInstruction:[1,1],
       instructions:[  
          {             

             [  
                Instructions.AttackingSupport
             ]:[  
                "Stay back while Attacking",
                "Balanced Attack",
                "Get Forward"
             ],
             
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             
          }
       ]
    },
    {  
       role:Roles.CB,
       "x":2,
       "y":1, 
       selectedInstruction:[1,1],
       instructions:[
        { 

            [  
               Instructions.AttackingSupport
            ]:[  
               "Stay back while Attacking",
               "Join the attack",
               "Play as Striker"
            ]
            
         },  
          {  
            [Instructions.Interception]:
             [  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
            
          }
 
       ]
    },
    {  
       role:Roles.RCB,
       "x":3,
       "y":1, 
       selectedInstruction:[1,1],
       instructions:[  
          {

             [  
                Instructions.AttackingSupport
             ]:[  
                "Stay back while Attacking",
                "Join the attack",
                "Play as Striker"
             ],
             
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
             
          }
 
       ]
    },
    {  
       role:Roles.CDM,
       "x":2,
       "y":2, 
       selectedInstruction:[1,1,1,1,1,1],
       instructions:[  
          {
 
             [  
                Instructions.AttackingSupport
             ]:[  
                "Stay back while Attacking",
                "Balanced Attack",
                "Get Forward"
             ],
             
          },
          {  
             [  
                Instructions.DefensiveBehaviour
             ]:[  
                "cut passing lanes",
                "balanced Defense",
                "Man mark"
             ],
             
          },
          {  
             [  
                Instructions.DefensivePosition
             ]:[  
                "cover center",
                "cover wing"
             ],
             
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             
          },
          {  
             [  
                Instructions.PositionFreedom
             ]:[  
                "Free Roam",
                "Stick to Position"
             ],
            
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             
          },
 
       ]
    },
    {  
       role:Roles.LM,
       "x":0,
       "y":3, 
       selectedInstruction:[1,1,1,1,1,1],
       instructions:[  
          {
 
             [  
                Instructions.ChanceCreation
             ]:[  
                "Stay Wide",
                "Balanced",
                "Cut Inside"
             ],
             
          },
          {  
             [  
                Instructions.DefensiveSupport
             ]:[  
                "come back on Defense",
                "Basic Defense Support",
                "stay forward"
             ],
             
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             
          },
          {  
             [  
                Instructions.PositionFreedom
             ]:[  
                "Free Roam",
                "Stick to Position"
             ],
             
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             
          },
          {  
             [  
                Instructions.SupportRuns
             ]:[  
                "Come Short",
                "Get in Behind"
             ],
             
          }
       ]
    },
    {  
       role:Roles.LCM,
       "x":1,
       "y":3,  
       selectedInstruction:[1,1,1,1,1,1],
       instructions:[  
          {

             [  
                Instructions.AttackingSupport
             ]:[  
                "Stay back while Attacking",
                "Balanced Attack",
                "Get Forward"
             ],
             
          },
          {  
             [  
                Instructions.DefensivePosition
             ]:[  
                "cover center",
                "cover wing"
             ],
             
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             
          },
          {  
             [  
                Instructions.PositionFreedom
             ]:[  
                "Free Roam",
                "Stick to Position"
             ],
             
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             
          }
       ]
    },
    {  
       role:Roles.CM,
       "x":2,
       "y":3, 
       selectedInstruction:[1,1,1,1,1,1],
       instructions:[  
          {
 
             [  
                Instructions.AttackingSupport
             ]:[  
                "Stay back while Attacking",
                "Balanced Attack",
                "Get Forward"
             ],
             
          },
          {  
             [  
                Instructions.DefensivePosition
             ]:[  
                "cover center",
                "cover wing"
             ],
             
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             
          },
          {  
             [  
                Instructions.PositionFreedom
             ]:[  
                "Free Roam",
                "Stick to Position"
             ],
             
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             
          }
       ]
    },
    {  
       role:Roles.RCM,
       "x":3,
       "y":3,
       selectedInstruction:[1,1,1,1,1,1],
       instructions:[  
          {


             [  
                Instructions.AttackingSupport
             ]:[  
                "Stay back while Attacking",
                "Balanced Attack",
                "Get Forward"
             ],
             
          },
          {  
             [  
                Instructions.DefensivePosition
             ]:[  
                "cover center",
                "cover wing"
             ],
             
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             
          },
          {  
             [  
                Instructions.PositionFreedom
             ]:[  
                "Free Roam",
                "Stick to Position"
             ],
             
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             
          }
       ]
    },
    {  
       role:Roles.RM,
       "x":4,
       "y":3, 
       selectedInstruction:[1,1,1,1,1],
       instructions:[  
          {
 
             [  
                Instructions.ChanceCreation
             ]:[  
                "Stay Wide",
                "Balanced",
                "Cut Inside"
             ],
             
          },
          {  
             [  
                Instructions.DefensiveSupport
             ]:[  
                "come back on Defense",
                "Basic Defense Support",
                "stay forward"
             ],
             
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             
          },
          {  
             [  
                Instructions.SupportRuns
             ]:[  
                "Come Short",
                "Get in Behind"
             ],
             
          }
       ]
    },
    {  
       role:Roles.LW,
       "x":0,
       "y":5, 
       selectedInstruction:[1,1,1,1,1],
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
             
          },
          {  
             [  
                Instructions.DefensiveSupport
             ]:[  
                "come back on Defense",
                "Basic Defense Support",
                "stay forward"
             ],
             
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             
          },
          {  
             [  
                Instructions.SupportOnCrosses
             ]:[  
                "Get into The Box for Cross",
                "Balanced Crossing runs",
                "Stay on Edge of box for cross"
             ],
             
          },
          {  
             [  
                Instructions.SupportRuns
             ]:[  
                "Come Short",
                "Get in Behind",
                "Target Man"
             ],
             
          }
       ]
    },
    {  
       role:Roles.LS,
       "x":1,
       "y":6,  
       selectedInstruction:[1,1,1],
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
             
          },
          {  
             [  
                Instructions.DefensiveSupport
             ]:[  
                "come back on Defense",
                "Basic Defense Support",
                "stay forward"
             ],
             
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             
          }
       ]
    },
    {  
       role:Roles.ST,
       "x":2,
       "y":6, 
       selectedInstruction:[1,1,1], 
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
             
          },
          {  
             [  
                Instructions.DefensiveSupport
             ]:[  
                "come back on Defense",
                "Basic Defense Support",
                "stay forward"
             ],
             
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             
          }
       ]
    },
    {  
       role:Roles.RS,
       "x":3,
       "y":6, 
       selectedInstruction:[1,1,1], 
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
             
          },
          {  
             [  
                Instructions.DefensiveSupport
             ]:[  
                "come back on Defense",
                "Basic Defense Support",
                "stay forward"
             ],
             
          },
          {  
             [  
                Instructions.Interception
             ]:[  
                "Aggressive Interceptions",
                "Normal Interceptions",
                "conservative Interceptions"
             ],
             
          }
       ]
    }
 ];

 export default mapping;