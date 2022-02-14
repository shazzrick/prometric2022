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
          "#cdata-section": "<h1 class=\"black\">Prometric MCQ - CPR - Section - 04 - ACS (Acute Coronary Syndrome)</h1><p class=\"p_20_black\">Welcome to MedicalMCQ4All.com</p><p class=\"p_20_black\"><h3><span style=\"color: rgb(230, 0, 0);\">IMPORTANT MCQS LIST- You must know the below MCQs for your Exam preparations </span></h3><p><span style=\"color: rgb(230, 0, 0);\">Must read -Quick Review points on our website it's free on your package.</span></p><p><span style=\"color: rgb(230, 0, 0);\">For Personalised or group coaching online or crash course subject wise-please contact </span></p><p><span style=\"color: rgb(230, 0, 0);\">Mobile/Whatsapp/BOTIM/IMO on +91 9825578080 (Dr.Munjal Pandya)</span></p><p><span style=\"color: rgb(230, 0, 0);\">Contact for</span><strong style=\"color: rgb(230, 0, 0);\"> DATAFLOW</strong><span style=\"color: rgb(230, 0, 0);\"> on same above numbers</span></p><p><span style=\"color: rgb(230, 0, 0);\">Skype-munjal.pandya1</span></p></p>"
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
      "#comment": " question 4995 ",
      "question": [
        {
          "-id": "q4995",
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
            "-id": "question4995",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">1. You are in the Emergency Department when a 54 year old male arrives rubbing the center of his chest. He states \"it feels like someone is sitting on my chest.\" He appears pale and his skin is diaphoretic. His radial pulse is strong, but fast. His Blood Pressure is 130/80 with a Pulse Ox of 92% on room air. He has no past medical history and takes no medications except for paracetamol for an occasional headache. He has no allergies. You take him back to a room, place in on the monitor and gain IV access.<br />\n<br />\nQuestion: His monitor strip is as follows</p>"
          },
          "image": [
            {
              "-id": "img",
              "-event": "expandImage",
              "-target": "question4995",
              "-position": "relative",
              "-display": "inline",
              "-margin-top": "0",
              "-margin-bottom": "0",
              "-anim": "show",
              "-animtime": "1",
              "-animdelay": "0.5",
              "-class": "img-responsive imagezindex center-block",
              "#cdata-section": "https://www.medicalmcq4all.com/public/uploads/answer/4995_CPR-SC4-Q1.png"
            },
            {
              "-id": "img",
              "-event": "expandImage1",
              "-target": "question4995",
              "-position": "relative",
              "-display": "inline",
              "-margin-top": "0",
              "-margin-bottom": "0",
              "-anim": "show",
              "-animtime": "1",
              "-animdelay": "0.5",
              "-class": "img-responsive imagezindex center-block",
              "#cdata-section": "https://www.medicalmcq4all.com/public/uploads/answer/3f298eac416ca323e5b3b0ab8063fba2.png"
            }
          ],
          "option": [
            {
              "-correct": "false",
              "text": {
                "-id": "option4995_1",
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
                "#cdata-section": "<p class=\"p_16 white\">A. Atrial Flutter.</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4995_2",
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
                "#cdata-section": "<p class=\"p_16 white\">B. Third degree heart block</p>"
              }
            },
            {
              "-correct": "true",
              "text": {
                "-id": "option4995_3",
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
                "#cdata-section": "<p class=\"p_16 white\">C. Normal sinus rhythm.</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4995_4",
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
                "#cdata-section": "<p class=\"p_16 white\">D. Atrial fibrillation</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is C : Normal sinus rhythm.<br/><p><span style=\"color: rgb(32, 33, 34);\">The term&nbsp;</span><strong style=\"color: rgb(32, 33, 34);\">normal sinus rhythm</strong><span style=\"color: rgb(32, 33, 34);\">&nbsp;(</span><strong style=\"color: rgb(32, 33, 34);\">NSR</strong><span style=\"color: rgb(32, 33, 34);\">) is sometimes used to denote a specific type of sinus rhythm where all other measurements on the ECG also fall within designated normal limits, giving rise to the characteristic appearance of the ECG when the&nbsp;</span><a href=\"https://en.wikipedia.org/wiki/Electrical_conduction_system_of_the_heart\" target=\"_blank\" style=\"color: rgb(6, 69, 173); background-color: rgb(255, 255, 255);\">electrical conduction system of the heart</a><span style=\"color: rgb(32, 33, 34);\">&nbsp;is functioning normally. However, other sinus rhythms can be entirely normal in particular patient groups and clinical contexts, so the term is sometimes considered a misnomer and its use is sometimes discouraged.</span></p><p><a href=\"https://en.wikipedia.org/wiki/Sinus_rhythm\" target=\"_blank\">Sinus rhythm - Wikipedia</a></p>.</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is C : Normal sinus rhythm.<br/><p><span style=\"color: rgb(32, 33, 34);\">The term&nbsp;</span><strong style=\"color: rgb(32, 33, 34);\">normal sinus rhythm</strong><span style=\"color: rgb(32, 33, 34);\">&nbsp;(</span><strong style=\"color: rgb(32, 33, 34);\">NSR</strong><span style=\"color: rgb(32, 33, 34);\">) is sometimes used to denote a specific type of sinus rhythm where all other measurements on the ECG also fall within designated normal limits, giving rise to the characteristic appearance of the ECG when the&nbsp;</span><a href=\"https://en.wikipedia.org/wiki/Electrical_conduction_system_of_the_heart\" target=\"_blank\" style=\"color: rgb(6, 69, 173); background-color: rgb(255, 255, 255);\">electrical conduction system of the heart</a><span style=\"color: rgb(32, 33, 34);\">&nbsp;is functioning normally. However, other sinus rhythms can be entirely normal in particular patient groups and clinical contexts, so the term is sometimes considered a misnomer and its use is sometimes discouraged.</span></p><p><a href=\"https://en.wikipedia.org/wiki/Sinus_rhythm\" target=\"_blank\">Sinus rhythm - Wikipedia</a></p>.</p>"
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
            "#comment2": " question 4996 "
          }
        },
        {
          "-id": "q4996",
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
            "-id": "question4996",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">2. Although the patient is not short of breath, he should receive oxygen because</p>"
          },
          "option": [
            {
              "-correct": "false",
              "text": {
                "-id": "option4996_1",
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
                "#cdata-section": "<p class=\"p_16 white\">A. He should not receive oxygen</p>"
              }
            },
            {
              "-correct": "true",
              "text": {
                "-id": "option4996_2",
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
                "#cdata-section": "<p class=\"p_16 white\">B. His oxygen saturation is below 94%</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4996_3",
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
                "#cdata-section": "<p class=\"p_16 white\">C. All chest pain patients receive oxygen</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4996_4",
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
                "#cdata-section": "<p class=\"p_16 white\">D. It will keep him away from having arrhythmias</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is B : His oxygen saturation is below 94%.</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is B : His oxygen saturation is below 94%.</p>"
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
            "#comment3": " question 4997 "
          }
        },
        {
          "-id": "q4997",
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
            "-id": "question4997",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">3. The next priority in his assessment (within 10 minutes of arrival) is</p>"
          },
          "option": [
            {
              "-correct": "false",
              "text": {
                "-id": "option4997_1",
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
                "#cdata-section": "<p class=\"p_16 white\">A. VQ scan</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4997_2",
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
                "#cdata-section": "<p class=\"p_16 white\">B. Exercise stress test</p>"
              }
            },
            {
              "-correct": "true",
              "text": {
                "-id": "option4997_3",
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
                "#cdata-section": "<p class=\"p_16 white\">C. 12 Lead ECG</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4997_4",
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
                "#cdata-section": "<p class=\"p_16 white\">D. CT scan of the chest</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is C : 12 Lead ECG.</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is C : 12 Lead ECG.</p>"
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
            "#comment4": " question 4998 "
          }
        },
        {
          "-id": "q4998",
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
            "-id": "question4998",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">4. You complete a 12 Lead ECG.The results are shown below. This ECG reveals</p>"
          },
          "image": {
            "-id": "img",
            "-event": "expandImage",
            "-target": "question4998",
            "-position": "relative",
            "-display": "inline",
            "-margin-top": "0",
            "-margin-bottom": "0",
            "-anim": "show",
            "-animtime": "1",
            "-animdelay": "0.5",
            "-class": "img-responsive imagezindex center-block",
            "#cdata-section": "https://www.medicalmcq4all.com/public/uploads/answer/4998_CPR-SC4-Q4.png"
          },
          "option": [
            {
              "-correct": "true",
              "text": {
                "-id": "option4998_1",
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
                "#cdata-section": "<p class=\"p_16 white\">A. STEMI \u2013 Anterior Lateral Wall Infarction</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4998_2",
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
                "#cdata-section": "<p class=\"p_16 white\">B. Unstable angina</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4998_3",
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
                "#cdata-section": "<p class=\"p_16 white\">C. STEMI \u2013 Inferior wall MI</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4998_4",
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
                "#cdata-section": "<p class=\"p_16 white\">D. Normal ECG</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is A : STEMI \u2013 Anterior Lateral Wall Infarction<br/><p><strong style=\"color: rgb(230, 0, 0);\">ECG LEADS AND WHICH WALL IS INVOLVED-EASY TO REMEMBER BY ACRONYM-</strong><strong style=\"color: rgb(0, 102, 204);\">SALI</strong></p><p><strong style=\"color: rgb(0, 102, 204);\">S=SEPTAL WALL-V1 V2</strong></p><p><strong style=\"color: rgb(0, 102, 204);\">A=ANTERIOR WALL-V3 V4</strong></p><p><strong style=\"color: rgb(0, 102, 204);\">L=LATERAL WALL-V5 V6</strong></p><p><strong style=\"color: rgb(0, 102, 204);\">I=INFERIOR WALL-II,III,aVF</strong></p><p>POSTERIOR WALL-ST DEPRESSION V1-V3 OR ST Elevtion in V7-V9</p><p><a href=\"https://www.healio.com/cardiology/learn-the-heart/cardiology-review/topic-reviews/anterior-myocardial-infarction\" target=\"_blank\">Anterior myocardial infarction | Learn the Heart (healio.com)</a></p>.</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is A : STEMI \u2013 Anterior Lateral Wall Infarction<br/><p><strong style=\"color: rgb(230, 0, 0);\">ECG LEADS AND WHICH WALL IS INVOLVED-EASY TO REMEMBER BY ACRONYM-</strong><strong style=\"color: rgb(0, 102, 204);\">SALI</strong></p><p><strong style=\"color: rgb(0, 102, 204);\">S=SEPTAL WALL-V1 V2</strong></p><p><strong style=\"color: rgb(0, 102, 204);\">A=ANTERIOR WALL-V3 V4</strong></p><p><strong style=\"color: rgb(0, 102, 204);\">L=LATERAL WALL-V5 V6</strong></p><p><strong style=\"color: rgb(0, 102, 204);\">I=INFERIOR WALL-II,III,aVF</strong></p><p>POSTERIOR WALL-ST DEPRESSION V1-V3 OR ST Elevtion in V7-V9</p><p><a href=\"https://www.healio.com/cardiology/learn-the-heart/cardiology-review/topic-reviews/anterior-myocardial-infarction\" target=\"_blank\">Anterior myocardial infarction | Learn the Heart (healio.com)</a></p>.</p>"
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
            "#comment5": " question 4999 "
          }
        },
        {
          "-id": "q4999",
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
            "-id": "question4999",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">5. Which medication should be given immediately upon diagnosis of myocardial infarction?</p>"
          },
          "option": [
            {
              "-correct": "true",
              "text": {
                "-id": "option4999_1",
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
                "#cdata-section": "<p class=\"p_16 white\">A. Aspirin</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4999_2",
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
                "#cdata-section": "<p class=\"p_16 white\">B. Epinephrine</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4999_3",
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
                "#cdata-section": "<p class=\"p_16 white\">C. Amiodarone</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option4999_4",
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
                "#cdata-section": "<p class=\"p_16 white\">D. Lidocaine</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is A : Aspirin.</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is A : Aspirin.</p>"
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
            "#comment6": " question 5000 "
          }
        },
        {
          "-id": "q5000",
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
            "-id": "question5000",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">6. This patient should be prepared to be transported where?</p>"
          },
          "option": [
            {
              "-correct": "true",
              "text": {
                "-id": "option5000_1",
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
                "#cdata-section": "<p class=\"p_16 white\">A. To the cardiac catheterization laboratory</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option5000_2",
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
                "#cdata-section": "<p class=\"p_16 white\">B. To the coronary care unit</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option5000_3",
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
                "#cdata-section": "<p class=\"p_16 white\">C. To the cardiac telemetry unit</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option5000_4",
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
                "#cdata-section": "<p class=\"p_16 white\">D. To the radiology department for a CT scan</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is A : To the cardiac catheterization laboratory.</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is A : To the cardiac catheterization laboratory.</p>"
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
            "#comment7": " question 5001 "
          }
        },
        {
          "-id": "q5001",
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
            "-id": "question5001",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">7. Nitroglycerin is administered to this patient without pain relief. He continues to complain of chest pain that he rates as an 8/10. He is obviously uncomfortable. Which type of medication should be given to relieve the pain of myocardial infarction?</p>"
          },
          "option": [
            {
              "-correct": "false",
              "text": {
                "-id": "option5001_1",
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
                "#cdata-section": "<p class=\"p_16 white\">A. Beta Blockers such as Lopressor</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option5001_2",
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
                "#cdata-section": "<p class=\"p_16 white\">B. Calcium Channel Blockers such as Diltiazem</p>"
              }
            },
            {
              "-correct": "true",
              "text": {
                "-id": "option5001_3",
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
                "#cdata-section": "<p class=\"p_16 white\">C. Narcotics such as Morphine, Fentanyl</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option5001_4",
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
                "#cdata-section": "<p class=\"p_16 white\">D. Statins such as Lipitor</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is C : Narcotics such as Morphine, Fentanyl.</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is C : Narcotics such as Morphine, Fentanyl.</p>"
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
            "#comment8": " question 5002 "
          }
        },
        {
          "-id": "q5002",
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
            "-id": "question5002",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">8. The goal of pain management in acute myocardial infarction is?</p>"
          },
          "option": [
            {
              "-correct": "false",
              "text": {
                "-id": "option5002_1",
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
                "#cdata-section": "<p class=\"p_16 white\">A. Reduction of pain by 50%</p>"
              }
            },
            {
              "-correct": "true",
              "text": {
                "-id": "option5002_2",
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
                "#cdata-section": "<p class=\"p_16 white\">B. Pain free</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option5002_3",
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
                "#cdata-section": "<p class=\"p_16 white\">C. Reduction of pain by 10%</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is B : Pain free<br/>Pain Control<br />\nPain from MI is often intense and requires prompt and adequate analgesia. The agent of choice is morphine sulfate, given initially IV at 5 to 15 minute intervals at typical doses of 2 to 4 mg.4 Reduction in myocardial ischemia also serves to reduce pain, so oxygen therapy, nitrates, and beta blockers remain the mainstay of therapy. Because morphine can mask ongoing ischemic symptoms, it should be reserved for patients being sent for coronary angiography. This was downgraded to aIIa recommendation in the latest STEMI guidelines,<br />\n<br><a target=\"_blank\" href=\"http://www.clevelandclinicmeded.com/medicalpubs/diseasemanagement/cardiology/acute-myocardial-infarction/\">http://www.clevelandclinicmeded.com/medicalpubs/diseasemanagement/cardiology/acute-myocardial-infarction/</a>.</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is B : Pain free<br/>Pain Control<br />\nPain from MI is often intense and requires prompt and adequate analgesia. The agent of choice is morphine sulfate, given initially IV at 5 to 15 minute intervals at typical doses of 2 to 4 mg.4 Reduction in myocardial ischemia also serves to reduce pain, so oxygen therapy, nitrates, and beta blockers remain the mainstay of therapy. Because morphine can mask ongoing ischemic symptoms, it should be reserved for patients being sent for coronary angiography. This was downgraded to aIIa recommendation in the latest STEMI guidelines,<br />\n<br><a target=\"_blank\" href=\"http://www.clevelandclinicmeded.com/medicalpubs/diseasemanagement/cardiology/acute-myocardial-infarction/\">http://www.clevelandclinicmeded.com/medicalpubs/diseasemanagement/cardiology/acute-myocardial-infarction/</a>.</p>"
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
            "#comment9": " question 5003 "
          }
        },
        {
          "-id": "q5003",
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
            "-id": "question5003",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">9. You would expect this patient to be discharged on?</p>"
          },
          "option": [
            {
              "-correct": "false",
              "text": {
                "-id": "option5003_1",
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
                "#cdata-section": "<p class=\"p_16 white\">A. There are no standard recommended medications for patients with acute myocardial infarction</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option5003_2",
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
                "#cdata-section": "<p class=\"p_16 white\">B. Amiodarone, Lidocaine and an Epinephrine preparation</p>"
              }
            },
            {
              "-correct": "true",
              "text": {
                "-id": "option5003_3",
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
                "#cdata-section": "<p class=\"p_16 white\">C. Beta Blocker, Ace Inhibitor, Aspirin and a Statin</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option5003_4",
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
                "#cdata-section": "<p class=\"p_16 white\">D. Cardiazem, Digoxin, Beta Blocker and Verapamil</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is C : Beta Blocker, Ace Inhibitor, Aspirin and a Statin.</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is C : Beta Blocker, Ace Inhibitor, Aspirin and a Statin.</p>"
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
            "#comment10": " question 5004 "
          }
        },
        {
          "-id": "q5004",
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
            "-id": "question5004",
            "-position": "relative",
            "-target": "col1",
            "-x": "0",
            "-margin-top": "10",
            "-margin-bottom": "40",
            "-anim": "left",
            "-animtime": "0.5",
            "#cdata-section": "<p class=\"p_20\">10. The size of this patient's infarction (amount of myocardium that dies) is what will determine how well he does into the future. The size of his infarction is dependent upon?</p>"
          },
          "option": [
            {
              "-correct": "false",
              "text": {
                "-id": "option5004_1",
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
                "#cdata-section": "<p class=\"p_16 white\">A. His LDL levels at discharge</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option5004_2",
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
                "#cdata-section": "<p class=\"p_16 white\">B. His genes</p>"
              }
            },
            {
              "-correct": "true",
              "text": {
                "-id": "option5004_3",
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
                "#cdata-section": "<p class=\"p_16 white\">C. The length of time until the vessel is opened and flow restored</p>"
              }
            },
            {
              "-correct": "false",
              "text": {
                "-id": "option5004_4",
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
                "#cdata-section": "<p class=\"p_16 white\">D. The amount of time it takes to get beta blockade</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Correct!</p><p>Correct answer is C : The length of time until the vessel is opened and flow restored.</p>"
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
                  "#cdata-section": "<p class=\"p_20 black\">Nope!</p><p>Correct answer is C : The length of time until the vessel is opened and flow restored.</p>"
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
      "#comment11": "generic timeout text",
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
      "#comment12": "score screen",
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