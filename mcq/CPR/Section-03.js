let question = {
  "data": {
    "events": {
      "event": [
        {
          "-id": "btnover",
          "rollover": {
            "css": {
              "-name": "btnOverCss",
              "#text": "this"
            }
          },
          "rollout": {
            "css": {
              "-name": "btnOutCss",
              "#text": "this"
            }
          }
        },
        {
          "-id": "optionover",
          "rollover": {
            "css": {
              "-name": "optionOverCss",
              "#text": "this"
            }
          },
          "rollout": {
            "css": {
              "-name": "optionOutCss",
              "#text": "this"
            }
          }
        },
        {
          "-id": "selectandsubmit",
          "click": {
            "css": {
              "-name": "optionOverCss",
              "#text": "this"
            },
            "function": [
              {
                "-name": "select",
                "#text": "this"
              },
              {
                "-name": "submit",
                "#text": "this"
              }
            ]
          }
        },
        {
          "-id": "select",
          "click": {
            "css": {
              "-name": "optionOverCss",
              "#text": "this"
            },
            "function": {
              "-name": "select",
              "#text": "this"
            }
          }
        },
        {
          "-id": "submit",
          "click": {
            "function": {
              "-name": "submit",
              "#text": "this"
            }
          }
        },
        {
          "-id": "reset",
          "click": {
            "function": {
              "-name": "reset",
              "#text": "this"
            }
          }
        },
        {
          "-id": "begin",
          "click": {
            "anim": {
              "-type": "remove",
              "-animtime": "0",
              "-oncomplete": "0",
              "#text": "openingText"
            },
            "function": {
              "-name": "begin",
              "#text": "this"
            }
          }
        },
        {
          "-id": "loadQuestion",
          "click": {
            "function": {
              "-name": "loadQuestion",
              "#text": "this"
            }
          }
        },
        {
          "-id": "loadNextQuestion",
          "click": {
            "function": {
              "-name": "loadNextQuestion",
              "#text": "this"
            }
          }
        },
        {
          "-id": "loadPreviousQuestion",
          "click": {
            "function": {
              "-name": "loadPreviousQuestion",
              "#text": "this"
            }
          }
        },
        {
          "-id": "restart",
          "click": {
            "function": {
              "-name": "restart",
              "#text": "this"
            }
          }
        },
        {
          "-id": "showq1bg",
          "click": {
            "anim": {
              "-type": "show",
              "-animtime": "2",
              "-oncomplete": "0",
              "#text": "q1bg"
            }
          }
        },
        {
          "-id": "hidepassbg",
          "click": {
            "anim": {
              "-type": "hide",
              "-animtime": "2",
              "-oncomplete": "0",
              "#text": "passbg"
            }
          }
        },
        {
          "-id": "showpassbg",
          "click": {
            "anim": {
              "-type": "show",
              "-animtime": "5",
              "-oncomplete": "0",
              "#text": "passbg"
            }
          }
        },
        {
          "-id": "hidefailbg",
          "click": {
            "anim": {
              "-type": "hide",
              "-animtime": "2",
              "-oncomplete": "0",
              "#text": "failbg"
            }
          }
        },
        {
          "-id": "showfailbg",
          "click": {
            "anim": {
              "-type": "show",
              "-animtime": "2",
              "-oncomplete": "0",
              "#text": "failbg"
            }
          }
        },
        {
          "-id": "expandImage",
          "click": {
            "css": {
              "-name": "expandImg",
              "#text": "this"
            },
            "function": {
              "-name": "expandImg",
              "#text": "this"
            }
          }
        },
        {
          "-id": "expandImage1",
          "click": {
            "css": {
              "-name": "expandImg1",
              "#text": "this"
            },
            "function": {
              "-name": "expandImg1",
              "#text": "this"
            }
          }
        }
      ]
    },
    "box": [
      {
        "-id": "failbg",
        "-position": "absolute",
        "-x": "0",
        "-y": "0",
        "-width": "100%",
        "-height": "100%",
        "-anim": "hide",
        "-class": "failbg",
        "-self-closing": "true"
      },
      {
        "-id": "orangebg",
        "-position": "absolute",
        "-x": "0",
        "-y": "0",
        "-width": "100%",
        "-height": "100%",
        "-anim": "hide",
        "-class": "orangebg",
        "-self-closing": "true"
      },
      {
        "#item": {
          "#comment": "responsive timer"
        }
      },
      {
        "#item": {
          "#comment1": "2 column layout, timer on the right, moves to top center on phones"
        }
      },
      {
        "-id": "timerRow",
        "-position": "absolute",
        "-x": "0",
        "-y": "0",
        "-anim": "none",
        "-animtime": "0.5",
        "-animdelay": "1",
        "-class": "col-md-12",
        "box": [
          {
            "-id": "timerCol1",
            "-position": "relative",
            "-class": "col-md-6",
            "-self-closing": "true"
          },
          {
            "-id": "timerContainer",
            "-position": "relative",
            "-class": "col-md-6",
            "-self-closing": "true"
          }
        ]
      },
      {
        "#item": {
          "#comment": "opening text"
        }
      },
      {
        "-id": "openingText",
        "-position": "relative",
        "-anim": "left",
        "-animtime": "0.5",
        "-animdelay": "1",
        "-class": "col-md-12",
        "-z-index": "3",
        "text": {
          "-id": "title",
          "-position": "relative",
          "-margin-top": "20",
          "-anim": "none",
          "#cdata-section": "<h1 class=\"black\">Prometric MCQ - CPR - Section - 03 - TACHYCARDIA</h1><p class=\"p_20_black\">Welcome to MedicalMCQ4All.com</p><p class=\"p_20_black\"><h3><span style=\"color: rgb(230, 0, 0);\">IMPORTANT MCQS LIST- You must know the below MCQs for your Exam preparations </span></h3><p><span style=\"color: rgb(230, 0, 0);\">Must read -Quick Review points on our website it's free on your package.</span></p><p><span style=\"color: rgb(230, 0, 0);\">For Personalised or group coaching online or crash course subject wise-please contact </span></p><p><span style=\"color: rgb(230, 0, 0);\">Mobile/Whatsapp/BOTIM/IMO on +91 9825578080 (Dr.Munjal Pandya)</span></p><p><span style=\"color: rgb(230, 0, 0);\">Contact for</span><strong style=\"color: rgb(230, 0, 0);\"> DATAFLOW</strong><span style=\"color: rgb(230, 0, 0);\"> on same above numbers</span></p><p><span style=\"color: rgb(230, 0, 0);\">Skype-munjal.pandya1</span></p></p>"
        },
        "button": {
          "-id": "goBtn",
          "-position": "relative",
          "-height": "40",
          "-width": "100",
          "-margin-top": "40",
          "-margin-bottom": "20",
          "-anim": "none",
          "-event": "btnover,begin",
          "-target": "title",
          "#cdata-section": "Let's go!"
        }
      }
    ],
    "#comment": "timed quiz",
    "custom": {
      "-type": "quiz",
      "-id": "quiz",
      "-position": "relative",
      "-x": "0",
      "-y": "0",
      "-class": "col-md-12",
      "settings": {
        "-timer": "false",
        "-timerx": "0",
        "-timery": "0",
        "-self-closing": "true"
      },
      "#comment": " question 4989 ",
      "question": [
        {
          "-id": "q4989",
          "-time": "15",
          "-event": "",
          "box": [
            {
              "-id": "col1",
              "-position": "relative",
              "-class": "col-md-12",
              "-self-closing": "true"
            },
            {
              "-id": "col2",
              "-position": "relative",
              "-class": "col-md-12 ansBox",
              "-self-closing": "true"
            }
          ],
          "text": {
            "-id": "question4989",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">1. You are called to the home of a 48 year woman whose chief complain is \"I almost fainted when I got out of bed.\" She has been ill for 2 days with nausea, vomiting and diarrhea. She had a temperature until this morning when it finally broke. She feels dizzy when she sits or stands up. Her skin is cool and clammy. Her color is pale. Her pulse is 130. Her BP is 88/64 and her Respirations are 18/min Pulse Ox reading is 96% on room air. She has no medical history.<br />\nQuestion-She is placed on the cardiac monitor which reveals the following rhythm. This rhythm is</p>"
          },
          "image": [
            {
              "-id": "img",
              "-event": "expandImage",
              "-target": "question4989",
              "-position": "relative",
              "-display": "inline",
              "-margin-top": "0",
              "-margin-bottom": "0",
              "-anim": "show",
              "-animtime": "1",
              "-animdelay": "0.5",
              "-class": "img-responsive imagezindex center-block",
              "#cdata-section": "https://www.medicalmcq4all.com/public/uploads/answer/4989_CPR-SC3-Q1.png"
            },
            {
              "-id": "img",
              "-event": "expandImage1",
              "-target": "question4989",
              "-position": "relative",
              "-display": "inline",
              "-margin-top": "0",
              "-margin-bottom": "0",
              "-anim": "show",
              "-animtime": "1",
              "-animdelay": "0.5",
              "-class": "img-responsive imagezindex center-block",
              "#cdata-section": "https://www.medicalmcq4all.com/public/uploads/answer/e18afb567a6f46b1704ba596dab9b222.jpg"
            }
          ],
          "option": [
            {
              "-correct": "false",
              "text": {
                "-id": "option4989_1",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">A. Atrial tachycardia</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4989_2",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">B. Ventricular tachycardia</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4989_3",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">C. Atrial fibrillation</p>"
              }
            },
            {
              "-correct": "true",
              "text": {
                "-id": "option4989_4",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">D. Sinus tachycardia</p>"
              }
            }
          ],
          "#comment": " feedbacks ",
          "fb": [
            {
              "-id": "pass",
              "-event": "",
              "box": {
                "-id": "fb",
                "-position": "relative",
                "-target": "col2",
                "-margin-top": "30",
                "-clear": "both",
                "-anim": "show",
                "-animtime": "0.5",
                "text": {
                  "-id": "txt1",
                  "-position": "relative",
                  "-anim": "none",
                  "-margin-bottom": "30",
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is D : Sinus tachycardia<br/><p>Calculation of Heart rate= 300 divided by Number of large box,eg 300/2 =150 HR </p><p><br></p><p><strong style=\"color: rgb(230, 0, 0);\">Sinus tachycardia </strong>(also colloquially known as sinus tach or sinus tachy) is an elevated sinus rhythm characterized by an increase in the rate of electrical impulses arising from the sinoatrial node. In adults, sinus tachycardia is defined as a <strong style=\"color: rgb(230, 0, 0);\">heart rate greater than 100 beats/min (bpm</strong>).</p><p><strong style=\"color: rgb(230, 0, 0);\">Treatment </strong>for physiologic sinus tachycardia involves treating the underlying causes of the tachycardia response. Beta blockers may be used to decrease tachycardia in patients with certain conditions, such as ischemic heart disease and rate-related angina. In patients with inappropriate sinus tachycardia, careful titration of beta blockers, salt loading, and hydration typically reduce symptoms. Patients who are unresponsive to such treatment can undergo catheter ablation to potentially repair the sinus node.[2] Acute myocardial infarction. Sinus tachycardia can present in more than a third of the patients with AMI but this usually decreases over time. Patients with sustained sinus tachycardia reflects a larger infarct that are more anterior with prominent left ventricular dysfunction, associated with high mortality and morbidity. Tachycardia in the presence of AMI can reduce coronary blood flow and increase myocardial oxygen demand, aggravating the situation. Beta blockers can be used to slow the rate, but most patients are usually already treated with beta blockers as a routine regimen for AMI. IST and POTS. Beta blockers are useful if the cause is sympathetic overactivity. If the cause is due to decreased vagal activity, it is usually hard to treat and one may consider radiofrequency catheter ablation.</p>.</p>"
                },
                "button": {
                  "-id": "nextQBtn",
                  "-position": "relative",
                  "-margin-bottom": "10",
                  "-width": "150",
                  "-anim": "none",
                  "-event": "btnover,loadNextQuestion",
                  "#cdata-section": "Next"
                }
              }
            },
            {
              "-id": "fail",
              "-event": "",
              "box": {
                "-id": "fb",
                "-position": "relative",
                "-target": "col2",
                "-margin-top": "30",
                "-clear": "both",
                "-anim": "show",
                "-animtime": "0.5",
                "text": {
                  "-id": "txt1",
                  "-position": "relative",
                  "-anim": "none",
                  "-margin-bottom": "30",
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is D : Sinus tachycardia<br/><p>Calculation of Heart rate= 300 divided by Number of large box,eg 300/2 =150 HR </p><p><br></p><p><strong style=\"color: rgb(230, 0, 0);\">Sinus tachycardia </strong>(also colloquially known as sinus tach or sinus tachy) is an elevated sinus rhythm characterized by an increase in the rate of electrical impulses arising from the sinoatrial node. In adults, sinus tachycardia is defined as a <strong style=\"color: rgb(230, 0, 0);\">heart rate greater than 100 beats/min (bpm</strong>).</p><p><strong style=\"color: rgb(230, 0, 0);\">Treatment </strong>for physiologic sinus tachycardia involves treating the underlying causes of the tachycardia response. Beta blockers may be used to decrease tachycardia in patients with certain conditions, such as ischemic heart disease and rate-related angina. In patients with inappropriate sinus tachycardia, careful titration of beta blockers, salt loading, and hydration typically reduce symptoms. Patients who are unresponsive to such treatment can undergo catheter ablation to potentially repair the sinus node.[2] Acute myocardial infarction. Sinus tachycardia can present in more than a third of the patients with AMI but this usually decreases over time. Patients with sustained sinus tachycardia reflects a larger infarct that are more anterior with prominent left ventricular dysfunction, associated with high mortality and morbidity. Tachycardia in the presence of AMI can reduce coronary blood flow and increase myocardial oxygen demand, aggravating the situation. Beta blockers can be used to slow the rate, but most patients are usually already treated with beta blockers as a routine regimen for AMI. IST and POTS. Beta blockers are useful if the cause is sympathetic overactivity. If the cause is due to decreased vagal activity, it is usually hard to treat and one may consider radiofrequency catheter ablation.</p>.</p>"
                },
                "button": {
                  "-id": "nextQBtn",
                  "-position": "relative",
                  "-margin-bottom": "10",
                  "-width": "150",
                  "-anim": "none",
                  "-event": "btnover,loadNextQuestion",
                  "#cdata-section": "Next"
                }
              }
            }
          ]
        },
        {
          "#item": {
            "#comment2": " question 4990 "
          }
        },
        {
          "-id": "q4990",
          "-time": "15",
          "-event": "",
          "box": [
            {
              "-id": "col1",
              "-position": "relative",
              "-class": "col-md-12",
              "-self-closing": "true"
            },
            {
              "-id": "col2",
              "-position": "relative",
              "-class": "col-md-12 ansBox",
              "-self-closing": "true"
            }
          ],
          "text": {
            "-id": "question4990",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">2. Same above scenario of sinus tachycardia.what is most appropriate to do ?</p>"
          },
          "option": [
            {
              "-correct": "false",
              "text": {
                "-id": "option4990_1",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">A. This rhythm is treated by Vagal maneuvers</p>"
              }
            },
            {
              "-correct": "true",
              "text": {
                "-id": "option4990_2",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">B. Finding the underlying cause and correcting it</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4990_3",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">C. Administering adenosine 6mg IV fast push</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4990_4",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">D. Synchronized cardioversion 50 joules</p>"
              }
            }
          ],
          "#comment": " feedbacks ",
          "fb": [
            {
              "-id": "pass",
              "-event": "",
              "box": {
                "-id": "fb",
                "-position": "relative",
                "-target": "col2",
                "-margin-top": "30",
                "-clear": "both",
                "-anim": "show",
                "-animtime": "0.5",
                "text": {
                  "-id": "txt1",
                  "-position": "relative",
                  "-anim": "none",
                  "-margin-bottom": "30",
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is B : Finding the underlying cause and correcting it<br/>Treatment<br />\nTreatment for physiologic sinus tachycardia involves treating the underlying causes of the tachycardia response. Beta blockers may be used to decrease tachycardia in patients with certain conditions, such as ischemic heart disease and rate-related angina. In patients with inappropriate sinus tachycardia, careful titration of beta blockers, salt loading, and hydration typically reduce symptoms. Patients who are unresponsive to such treatment can undergo catheter ablation to potentially repair the sinus node.[2] <br />\nAcute myocardial infarction. Sinus tachycardia can present in more than a third of the patients with AMI but this usually decreases over time. Patients with sustained sinus tachycardia reflects a larger infarct that are more anterior with prominent left ventricular dysfunction, associated with high mortality and morbidity. Tachycardia in the presence of AMI can reduce coronary blood flow and increase myocardial oxygen demand, aggravating the situation. Beta blockers can be used to slow the rate, but most patients are usually already treated with beta blockers as a routine regimen for AMI. <br />\nIST and POTS. Beta blockers are useful if the cause is sympathetic overactivity. If the cause is due to decreased vagal activity, it is usually hard to treat and one may consider radiofrequency catheter ablation..</p>"
                },
                "button": [
                  {
                    "-id": "nextQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadNextQuestion",
                    "#cdata-section": "Next"
                  },
                  {
                    "-id": "preQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadPreviousQuestion",
                    "#cdata-section": "Previous"
                  }
                ]
              }
            },
            {
              "-id": "fail",
              "-event": "",
              "box": {
                "-id": "fb",
                "-position": "relative",
                "-target": "col2",
                "-margin-top": "30",
                "-clear": "both",
                "-anim": "show",
                "-animtime": "0.5",
                "text": {
                  "-id": "txt1",
                  "-position": "relative",
                  "-anim": "none",
                  "-margin-bottom": "30",
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is B : Finding the underlying cause and correcting it<br/>Treatment<br />\nTreatment for physiologic sinus tachycardia involves treating the underlying causes of the tachycardia response. Beta blockers may be used to decrease tachycardia in patients with certain conditions, such as ischemic heart disease and rate-related angina. In patients with inappropriate sinus tachycardia, careful titration of beta blockers, salt loading, and hydration typically reduce symptoms. Patients who are unresponsive to such treatment can undergo catheter ablation to potentially repair the sinus node.[2] <br />\nAcute myocardial infarction. Sinus tachycardia can present in more than a third of the patients with AMI but this usually decreases over time. Patients with sustained sinus tachycardia reflects a larger infarct that are more anterior with prominent left ventricular dysfunction, associated with high mortality and morbidity. Tachycardia in the presence of AMI can reduce coronary blood flow and increase myocardial oxygen demand, aggravating the situation. Beta blockers can be used to slow the rate, but most patients are usually already treated with beta blockers as a routine regimen for AMI. <br />\nIST and POTS. Beta blockers are useful if the cause is sympathetic overactivity. If the cause is due to decreased vagal activity, it is usually hard to treat and one may consider radiofrequency catheter ablation..</p>"
                },
                "button": [
                  {
                    "-id": "nextQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadNextQuestion",
                    "#cdata-section": "Next"
                  },
                  {
                    "-id": "preQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadPreviousQuestion",
                    "#cdata-section": "Previous"
                  }
                ]
              }
            }
          ]
        },
        {
          "#item": {
            "#comment3": " question 4991 "
          }
        },
        {
          "-id": "q4991",
          "-time": "15",
          "-event": "",
          "box": [
            {
              "-id": "col1",
              "-position": "relative",
              "-class": "col-md-12",
              "-self-closing": "true"
            },
            {
              "-id": "col2",
              "-position": "relative",
              "-class": "col-md-12 ansBox",
              "-self-closing": "true"
            }
          ],
          "text": {
            "-id": "question4991",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">3. Same above scenario of sinus tachycardia<br />\nBased on this patient's history, her tachycardia is most likely caused by?</p>"
          },
          "option": [
            {
              "-correct": "true",
              "text": {
                "-id": "option4991_1",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">A. Dehydration</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4991_2",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">B. Underlying arrhythmia</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4991_3",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">C. Vertigo</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4991_4",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">D. Heart disease</p>"
              }
            }
          ],
          "#comment": " feedbacks ",
          "fb": [
            {
              "-id": "pass",
              "-event": "",
              "box": {
                "-id": "fb",
                "-position": "relative",
                "-target": "col2",
                "-margin-top": "30",
                "-clear": "both",
                "-anim": "show",
                "-animtime": "0.5",
                "text": {
                  "-id": "txt1",
                  "-position": "relative",
                  "-anim": "none",
                  "-margin-bottom": "30",
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is A : Dehydration.</p>"
                },
                "button": [
                  {
                    "-id": "nextQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadNextQuestion",
                    "#cdata-section": "Next"
                  },
                  {
                    "-id": "preQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadPreviousQuestion",
                    "#cdata-section": "Previous"
                  }
                ]
              }
            },
            {
              "-id": "fail",
              "-event": "",
              "box": {
                "-id": "fb",
                "-position": "relative",
                "-target": "col2",
                "-margin-top": "30",
                "-clear": "both",
                "-anim": "show",
                "-animtime": "0.5",
                "text": {
                  "-id": "txt1",
                  "-position": "relative",
                  "-anim": "none",
                  "-margin-bottom": "30",
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is A : Dehydration.</p>"
                },
                "button": [
                  {
                    "-id": "nextQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadNextQuestion",
                    "#cdata-section": "Next"
                  },
                  {
                    "-id": "preQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadPreviousQuestion",
                    "#cdata-section": "Previous"
                  }
                ]
              }
            }
          ]
        },
        {
          "#item": {
            "#comment4": " question 4992 "
          }
        },
        {
          "-id": "q4992",
          "-time": "15",
          "-event": "",
          "box": [
            {
              "-id": "col1",
              "-position": "relative",
              "-class": "col-md-12",
              "-self-closing": "true"
            },
            {
              "-id": "col2",
              "-position": "relative",
              "-class": "col-md-12 ansBox",
              "-self-closing": "true"
            }
          ],
          "text": {
            "-id": "question4992",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">4. Same above scenario ,the next step in her treatment should be</p>"
          },
          "option": [
            {
              "-correct": "true",
              "text": {
                "-id": "option4992_1",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">A. Normal saline solution bolus</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4992_2",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">B. Transcutanous pacemaker</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4992_3",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">C. Dextrose 50%</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4992_4",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">D. Oxygen</p>"
              }
            }
          ],
          "#comment": " feedbacks ",
          "fb": [
            {
              "-id": "pass",
              "-event": "",
              "box": {
                "-id": "fb",
                "-position": "relative",
                "-target": "col2",
                "-margin-top": "30",
                "-clear": "both",
                "-anim": "show",
                "-animtime": "0.5",
                "text": {
                  "-id": "txt1",
                  "-position": "relative",
                  "-anim": "none",
                  "-margin-bottom": "30",
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is A : Normal saline solution bolus.</p>"
                },
                "button": [
                  {
                    "-id": "nextQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadNextQuestion",
                    "#cdata-section": "Next"
                  },
                  {
                    "-id": "preQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadPreviousQuestion",
                    "#cdata-section": "Previous"
                  }
                ]
              }
            },
            {
              "-id": "fail",
              "-event": "",
              "box": {
                "-id": "fb",
                "-position": "relative",
                "-target": "col2",
                "-margin-top": "30",
                "-clear": "both",
                "-anim": "show",
                "-animtime": "0.5",
                "text": {
                  "-id": "txt1",
                  "-position": "relative",
                  "-anim": "none",
                  "-margin-bottom": "30",
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is A : Normal saline solution bolus.</p>"
                },
                "button": [
                  {
                    "-id": "nextQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadNextQuestion",
                    "#cdata-section": "Next"
                  },
                  {
                    "-id": "preQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadPreviousQuestion",
                    "#cdata-section": "Previous"
                  }
                ]
              }
            }
          ]
        },
        {
          "#item": {
            "#comment5": " question 4993 "
          }
        },
        {
          "-id": "q4993",
          "-time": "15",
          "-event": "",
          "box": [
            {
              "-id": "col1",
              "-position": "relative",
              "-class": "col-md-12",
              "-self-closing": "true"
            },
            {
              "-id": "col2",
              "-position": "relative",
              "-class": "col-md-12 ansBox",
              "-self-closing": "true"
            }
          ],
          "text": {
            "-id": "question4993",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">5. Same above scenario <br />\nWhich of the following is TRUE regarding Sinus Tachycardia.</p>"
          },
          "option": [
            {
              "-correct": "true",
              "text": {
                "-id": "option4993_1",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">A. It is always compensating for an underlying issue</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4993_2",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">B. It is always a life threatening arrhythmia</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4993_3",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">C. Sinus tachycardia often presents with heart rates above 200 bpm</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4993_4",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">D. Always requires the administration of Adenosine</p>"
              }
            }
          ],
          "#comment": " feedbacks ",
          "fb": [
            {
              "-id": "pass",
              "-event": "",
              "box": {
                "-id": "fb",
                "-position": "relative",
                "-target": "col2",
                "-margin-top": "30",
                "-clear": "both",
                "-anim": "show",
                "-animtime": "0.5",
                "text": {
                  "-id": "txt1",
                  "-position": "relative",
                  "-anim": "none",
                  "-margin-bottom": "30",
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is A : It is always compensating for an underlying issue.</p>"
                },
                "button": [
                  {
                    "-id": "nextQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadNextQuestion",
                    "#cdata-section": "Next"
                  },
                  {
                    "-id": "preQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadPreviousQuestion",
                    "#cdata-section": "Previous"
                  }
                ]
              }
            },
            {
              "-id": "fail",
              "-event": "",
              "box": {
                "-id": "fb",
                "-position": "relative",
                "-target": "col2",
                "-margin-top": "30",
                "-clear": "both",
                "-anim": "show",
                "-animtime": "0.5",
                "text": {
                  "-id": "txt1",
                  "-position": "relative",
                  "-anim": "none",
                  "-margin-bottom": "30",
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is A : It is always compensating for an underlying issue.</p>"
                },
                "button": [
                  {
                    "-id": "nextQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadNextQuestion",
                    "#cdata-section": "Next"
                  },
                  {
                    "-id": "preQBtn",
                    "-position": "relative",
                    "-margin-bottom": "10",
                    "-width": "150",
                    "-anim": "none",
                    "-event": "btnover,loadPreviousQuestion",
                    "#cdata-section": "Previous"
                  }
                ]
              }
            }
          ]
        },
        {
          "#item": {
            "#comment6": " question 4994 "
          }
        },
        {
          "-id": "q4994",
          "-time": "15",
          "-event": "",
          "box": [
            {
              "-id": "col1",
              "-position": "relative",
              "-class": "col-md-12",
              "-self-closing": "true"
            },
            {
              "-id": "col2",
              "-position": "relative",
              "-class": "col-md-12 ansBox",
              "-self-closing": "true"
            }
          ],
          "text": {
            "-id": "question4994",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">6. In what way does Sinus Tachycardia differ from Normal Sinus Rhythm?</p>"
          },
          "option": [
            {
              "-correct": "false",
              "text": {
                "-id": "option4994_1",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">A. The PR interval is longer</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4994_2",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">B. The QRS is wider</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4994_3",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">C. The rhythm is irregular</p>"
              }
            },
            {
              "-correct": "true",
              "text": {
                "-id": "option4994_4",
                "-position": "relative",
                "-target": "col1",
                "-x": "match",
                "-width": "100%",
                "-margin-bottom": "10",
                "-anim": "show",
                "-animtime": "0.5",
                "-animdelay": "0.5",
                "-event": "optionover,selectandsubmit",
                "-class": "optionBox",
                "#cdata-section": "<p class=\"p_16 white\">D. The heart rate is above 100 bpm</p>"
              }
            }
          ],
          "#comment": " feedbacks ",
          "fb": [
            {
              "-id": "pass",
              "-event": "",
              "box": {
                "-id": "fb",
                "-position": "relative",
                "-target": "col2",
                "-margin-top": "30",
                "-clear": "both",
                "-anim": "show",
                "-animtime": "0.5",
                "text": {
                  "-id": "txt1",
                  "-position": "relative",
                  "-anim": "none",
                  "-margin-bottom": "30",
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is D : The heart rate is above 100 bpm<br/>SVT is always more symptomatic than sinustach. Sinus tachycardiahas a rate of 100 to 150 beats per minute and SVT has a rate of 151 to 250 beats per minute. With sinus tachycardia, the P waves and T waves are separate. With SVT, they are together..</p>"
                },
                "button": {
                  "-id": "preQBtn",
                  "-position": "relative",
                  "-margin-bottom": "10",
                  "-width": "150",
                  "-anim": "none",
                  "-event": "btnover,loadPreviousQuestion",
                  "#cdata-section": "Previous"
                }
              }
            },
            {
              "-id": "fail",
              "-event": "",
              "box": {
                "-id": "fb",
                "-position": "relative",
                "-target": "col2",
                "-margin-top": "30",
                "-clear": "both",
                "-anim": "show",
                "-animtime": "0.5",
                "text": {
                  "-id": "txt1",
                  "-position": "relative",
                  "-anim": "none",
                  "-margin-bottom": "30",
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is D : The heart rate is above 100 bpm<br/>SVT is always more symptomatic than sinustach. Sinus tachycardiahas a rate of 100 to 150 beats per minute and SVT has a rate of 151 to 250 beats per minute. With sinus tachycardia, the P waves and T waves are separate. With SVT, they are together..</p>"
                },
                "button": {
                  "-id": "preQBtn",
                  "-position": "relative",
                  "-margin-bottom": "10",
                  "-width": "150",
                  "-anim": "none",
                  "-event": "btnover,loadPreviousQuestion",
                  "#cdata-section": "Previous"
                }
              }
            }
          ]
        }
      ],
      "#comment7": "generic timeout text",
      "timeout": {
        "box": {
          "-id": "center",
          "-position": "relative",
          "-height": "100%",
          "box": {
            "-id": "timeOut",
            "-position": "relative",
            "-height": "350",
            "-margin-top": "0",
            "-margin-bottom": "20",
            "-anim": "left",
            "-animtime": "1",
            "-ease": "Bounce.easeOut",
            "-class": "col-sm-8 col-sm-offset-2 vertical-align border timesupbg",
            "text": {
              "-id": "timeoutTxt",
              "-position": "relative",
              "-x": "10",
              "-margin-top": "30",
              "-margin-bottom": "20",
              "-anim": "none",
              "#cdata-section": "<p class=\"p_42 grey\">Times up!</p>"
            },
            "button": {
              "-id": "startAgainBtn",
              "-position": "relative",
              "-x": "10",
              "-margin-bottom": "30",
              "-height": "40",
              "-width": "100",
              "-anim": "none",
              "-event": "btnover,restart",
              "#cdata-section": "Start again"
            }
          }
        }
      },
      "#comment8": "score screen",
      "score": {
        "-masteryscore": "80",
        "fb": [
          {
            "-id": "pass",
            "-event": "",
            "box": {
              "-id": "center",
              "-position": "relative",
              "-height": "100%",
              "box": {
                "-id": "passTextBox",
                "-position": "relative",
                "-height": "350",
                "-margin-top": "0",
                "-margin-bottom": "20",
                "-anim": "left",
                "-animtime": "0.5",
                "-class": "col-sm-8 col-sm-offset-2 vertical-align border passbg",
                "text": {
                  "-id": "pass_txt",
                  "-position": "relative",
                  "-x": "10",
                  "-margin-top": "30",
                  "-margin-bottom": "20",
                  "-anim": "none",
                  "#cdata-section": "<p class=\"p_30 white glow\">CONGRATULATIONS!</p><p class=\"p_20 orange glow\">You scored [score]%</p>"
                },
                "button": {
                  "-id": "goBtn",
                  "-position": "relative",
                  "-x": "10",
                  "-margin-bottom": "30",
                  "-height": "40",
                  "-width": "140",
                  "-anim": "none",
                  "-event": "btnover,restart,hidepassbg",
                  "#cdata-section": "Play again?"
                }
              }
            }
          },
          {
            "-id": "fail",
            "-event": "",
            "box": {
              "-id": "center",
              "-position": "relative",
              "-height": "100%",
              "box": {
                "-id": "failTextBox",
                "-position": "relative",
                "-height": "350",
                "-margin-top": "0",
                "-margin-bottom": "20",
                "-anim": "left",
                "-animtime": "0.5",
                "-class": "col-sm-8 col-sm-offset-2 vertical-align border failbg",
                "text": {
                  "-id": "fail_txt",
                  "-position": "relative",
                  "-x": "10",
                  "-margin-top": "30",
                  "-margin-bottom": "20",
                  "-anim": "none",
                  "#cdata-section": "<p class=\"p_32 white glow\">Bad luck! You scored [score]%</p><p class=\"p_20 orange glow\">Why not have another go?</p>"
                },
                "button": {
                  "-id": "goBtn",
                  "-position": "relative",
                  "-x": "10",
                  "-margin-bottom": "30",
                  "-height": "40",
                  "-width": "120",
                  "-anim": "none",
                  "-animtime": "0.5",
                  "-event": "btnover,restart,hidefailbg",
                  "#cdata-section": "Start again"
                }
              }
            }
          }
        ]
      }
    }
  }
}