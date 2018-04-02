/******************************************************************************

SignSpeaks - Sign language translation glove
Author - Return 0;

******************************************************************************/

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Declare 5 variables for analog pin inputs and assign the analog pin value. Declare it as const as their value get never change.

const int FLEX_PIN1 = A0;
const int FLEX_PIN2 = A1;
const int FLEX_PIN3 = A2;
const int FLEX_PIN4 = A3;
const int FLEX_PIN5 = A6;

//These are constant variables where data type is float. And assign values to them.
const float VCC = 4.98; 
const float R_DIV = 47500.0; 

const float STRAIGHT_RESISTANCE = 37300.0; 
const float BEND_RESISTANCE = 90000.0; 

//Declare 5 variables for 5 flex seonsors.float finger1;
float finger2;
float finger3;
float finger4;
float finger5;


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//This function is called once when the code starts. This method is to initilize pin modes.
void setup() 
{

//Set the data rate in bits per second (baud) for serial data transmission. 
  Serial.begin(9600);

  //Define above declared ports as input ports.
  pinMode(FLEX_PIN1, INPUT);
  pinMode(FLEX_PIN2, INPUT);
  pinMode(FLEX_PIN3, INPUT);
  pinMode(FLEX_PIN4, INPUT);
  pinMode(FLEX_PIN5, INPUT);
}

//This function will be executed from top to bottom, until the bottom function is reached. And this will run again and again.
void loop() 
{

  //call the getDetails function and pass the analog pin port number as an argument and get the return value.
  finger1 = getDetails(FLEX_PIN1);
  finger2 = getDetails(FLEX_PIN2);
  finger3 = getDetails(FLEX_PIN3);
  finger4 = getDetails(FLEX_PIN4);
  finger5 = getDetails(FLEX_PIN5);

  Serial.println("\n");

  //call getLetter function to capture the letter.
  Serial.println(getLetter()+ "\n"); 

  //set a delay of 1.5 seconds
  delay(1500);

  
}

//funtion to retrieve details according to the pin number. 
float getDetails(int FLEX_PIN){

  //read the and return a integer value ranged from 0 to 1023.
  int flexADC = analogRead(FLEX_PIN);
  float flexV = flexADC * VCC / 1023.0;
  float flexR = R_DIV * (VCC / flexV - 1.0);

  // Use the calculated resistance to estimate the sensor's
  // bend angle:
  float angle = map(flexR, STRAIGHT_RESISTANCE, BEND_RESISTANCE, 0, 90.0);

  float flexKR = flexR / 1000;
  
  Serial.println("Resistance: " + String(flexKR) + " K ohms\t\tBend: " + String(angle) + " degrees");

   return flexKR;
 
}

//this will return the letter according to the finger and the angle of the finger.
String getLetter(){
  
   if (finger1 >= 1600 && finger1 <= 1900){
    if(finger2 >= 2600 && finger2 <=3200){
      if (finger3 >= 2100 && finger3 <= 2500){
        if(finger4 >= 2600 && finger4 <= 3200){
          if(finger5 >= 2500 && finger5 <=3500){
            return "A";
            }
          }
        }
      }
    }

    if (finger1 >= 2500 && finger1 <= 2900){
    if(finger2 >= 1300 && finger2 <=1700){
      if (finger3 >= 1300 && finger3 <= 1700){
        if(finger4 >= 1300 && finger4 <= 1700){
          if(finger5 >= 1300 && finger5 <=1700){
            return "B";
            }
          }
        }
      }
    }

     if (finger1 >= 1500 && finger1 <= 1700){
    if(finger2 >= 1500 && finger2 <=2300){
      if (finger3 >= 1700 && finger3 <= 2000){
        if(finger4 >= 1800 && finger4 <= 2300){
          if(finger5 >= 1600 && finger5 <=2100){
            return "C";
            }
          }
        }
      }
    }

      if (finger1 >= 1600 && finger1 <= 2100){
    if(finger2 >= 2000 && finger2 <=2600){
      if (finger3 >= 1700 && finger3 <= 2000){
        if(finger4 >= 1800 && finger4 <= 2300){
          if(finger5 >= 1500 && finger5 <=1600){
            return "D";
            }
          }
        }
      }
    }

       if (finger1 >= 2600 && finger1 <= 3200){
    if(finger2 >= 2600 && finger2 <= 3000){
      if (finger3 >= 2200 && finger3 <= 2600){
        if(finger4 >= 3100 && finger4 <= 4100){
          if(finger5 >= 2600 && finger5 <= 3500){
            return "E";
            }
          }
        }
      }
    }

     if (finger1 >= 1500 && finger1 <= 2300){
    if(finger2 >= 2200 && finger2 <= 3000){
      if (finger3 >= 1500 && finger3 <= 1600){
        if(finger4 >= 1500 && finger4 <= 1700){
          if(finger5 >= 1500 && finger5 <= 1600){
            return "F";
            }
          }
        }
      }
    }

    if (finger1 >= 1700 && finger1 <= 2200){
    if(finger2 >= 1600 && finger2 <= 1800){
      if (finger3 >= 2000 && finger3 <= 2200){
        if(finger4 >= 2600 && finger4 <= 3200){
          if(finger5 >= 1900 && finger5 <= 3400){
            return "G";
            }
          }
        }
      }
    }

    if (finger1 >= 1800 && finger1 <= 2500){
    if(finger2 >= 1400 && finger2 <= 1800){
      if (finger3 >= 1300 && finger3 <= 1600){
        if(finger4 >= 3400 && finger4 <= 4100){
          if(finger5 >= 3400 && finger5 <= 3700){
            return "H";
            }
          }
        }
      }
    }

    if (finger1 >= 1900 && finger1 <= 2600){
    if(finger2 >= 2800 && finger2 <= 3200){
      if (finger3 >= 2500 && finger3 <= 2700){
        if(finger4 >= 2600 && finger4 <= 3200){
          if(finger5 >= 1500 && finger5 <= 1700){
            return "I";
            }
          }
        }
      }
    }

     if (finger1 >= 1300 && finger1 <= 1500){
    if(finger2 >= 1500 && finger2 <= 1700){
      if (finger3 >= 1300 && finger3 <= 1500){
        if(finger4 >= 2500 && finger4 <= 3200){
          if(finger5 >= 2200 && finger5 <= 2900){
            return "K";
            }
          }
        }
      }
    }

    if (finger1 >= 1300 && finger1 <= 1500){
    if(finger2 >= 1600 && finger2 <= 1800){
      if (finger3 >= 2000 && finger3 <= 2500){
        if(finger4 >= 2600 && finger4 <= 3000){
          if(finger5 >= 2600 && finger5 <= 3400){
            return "L";
            }
          }
        }
      }
    }

      if (finger1 >= 2800 && finger1 <= 3700){
    if(finger2 >= 2200 && finger2 <= 2700){
      if (finger3 >= 1900 && finger3 <= 2300){
        if(finger4 >= 2000 && finger4 <= 2900){
          if(finger5 >= 2000 && finger5 <= 2500){
            return "M";
            }
          }
        }
      }
    }

     if (finger1 >= 2000 && finger1 <= 2500){
    if(finger2 >= 2200 && finger2 <= 2700){
      if (finger3 >= 1900 && finger3 <= 2300){
        if(finger4 >= 3000 && finger4 <= 3700){
          if(finger5 >= 2500 && finger5 <= 3200){
            return "N";
            }
          }
        }
      }
    }

      if (finger1 >= 1800 && finger1 <= 2700){
    if(finger2 >= 2500 && finger2 <= 3000){
      if (finger3 >= 2200 && finger3 <= 2600){
        if(finger4 >= 2800 && finger4 <= 3500){
          if(finger5 >= 2600 && finger5 <= 3200){
            return "O";
            }
          }
        }
      }
    }

    if (finger1 >= 1400 && finger1 <= 1700){
    if(finger2 >= 1500 && finger2 <= 1700){
      if (finger3 >= 1500 && finger3 <= 1700){
        if(finger4 >= 1800 && finger4 <= 2200){
          if(finger5 >= 1800 && finger5 <= 2300){
            return "P";
            }
          }
        }
      }
    }

     if (finger1 >= 1300 && finger1 <= 1500){
    if(finger2 >= 1600 && finger2 <= 2100){
      if (finger3 >= 1800 && finger3 <= 2100){
        if(finger4 >= 2500 && finger4 <= 3200){
          if(finger5 >= 2300 && finger5 <= 3200){
            return "Q";
            }
          }
        }
      }
    }

       if (finger1 >= 1900 && finger1 <= 2400){
    if(finger2 >= 1600 && finger2 <= 1800){
      if (finger3 >= 1400 && finger3 <= 1600){
        if(finger4 >= 3400 && finger4 <= 4200){
          if(finger5 >= 3000 && finger5 <= 3500){
            return "R";
            }
          }
        }
      }
    }

     if (finger1 >= 2000 && finger1 <= 3000){
    if(finger2 >= 3000 && finger2 <= 3500){
      if (finger3 >= 2500 && finger3 <= 2900){
        if(finger4 >= 3500 && finger4 <= 4500){
          if(finger5 >= 3500 && finger5 <= 4100){
            return "S";
            }
          }
        }
      }
    }

      if (finger1 >= 1300 && finger1 <= 1500){
    if(finger2 >= 1700 && finger2 <= 1900){
      if (finger3 >= 2000 && finger3 <= 2300){
        if(finger4 >= 2800 && finger4 <= 3200){
          if(finger5 >= 2800 && finger5 <= 3200){
            return "T";
            }
          }
        }
      }
    }

     if (finger1 >= 2000 && finger1 <= 2600){
    if(finger2 >= 1500 && finger2 <= 1700){
      if (finger3 >= 1400 && finger3 <= 1600){
        if(finger4 >= 3400 && finger4 <= 4100){
          if(finger5 >= 2600 && finger5 <= 3500){
            return "V";
            }
          }
        }
      }
    }

     if (finger1 >= 1900 && finger1 <= 2200){
    if(finger2 >= 1500 && finger2 <= 1700){
      if (finger3 >= 1400 && finger3 <= 1500){
        if(finger4 >= 1600 && finger4 <= 1700){
          if(finger5 >= 3000 && finger5 <= 3700){
            return "W";
            }
          }
        }
      }
    }

     if (finger1 >= 3000 && finger1 <= 3700){
    if(finger2 >= 2000 && finger2 <= 2600){
      if (finger3 >= 2200 && finger3 <= 2500){
        if(finger4 >= 2800 && finger4 <= 3200){
          if(finger5 >= 2800 && finger5 <= 3200){
            return "X";
            }
          }
        }
      }
    }

     if (finger1 >= 1500 && finger1 <= 1700){
    if(finger2 >= 2300 && finger2 <= 2900){
      if (finger3 >= 1900 && finger3 <= 2500){
        if(finger4 >= 2200 && finger4 <= 3000){
          if(finger5 >= 1500 && finger5 <= 1600){
            return "Y";
            }
          }
        }
      }
    }

    return "no letter";
  
}


