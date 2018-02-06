/******************************************************************************
Flex_Sensor_Example.ino
Example sketch for SparkFun's flex sensors
  (https://www.sparkfun.com/products/10264)
Jim Lindblom @ SparkFun Electronics
April 28, 2016

Create a voltage divider circuit combining a flex sensor with a 47k resistor.
- The resistor should connect from A0 to GND.
- The flex sensor should connect from A0 to 3.3V
As the resistance of the flex sensor increases (meaning it's being bent), the
voltage at A0 should decrease.

Development environment specifics:
Arduino 1.6.7
******************************************************************************/
const int FLEX_PIN1 = A0;
const int FLEX_PIN2 = A1;
const int FLEX_PIN3 = A2;
const int FLEX_PIN4 = A3;
const int FLEX_PIN5 = A4;
// Pin connected to voltage divider output

// Measure the voltage at 5V and the actual resistance of your
// 47k resistor, and enter them below:
const float VCC = 4.98; // Measured voltage of Ardunio 5V line
const float R_DIV = 47500.0; // Measured resistance of 3.3k resistor

// Upload the code, then try to adjust these values to more
// accurately calculate bend degree.
const float STRAIGHT_RESISTANCE = 37300.0; // resistance when straight
const float BEND_RESISTANCE = 90000.0; // resistance at 90 deg

float finger1;
float finger2;
float finger3;
float finger4;
float finger5;


void setup() 
{
  Serial.begin(9600);
  pinMode(FLEX_PIN1, INPUT);
  pinMode(FLEX_PIN2, INPUT);
  pinMode(FLEX_PIN3, INPUT);
  pinMode(FLEX_PIN4, INPUT);
  pinMode(FLEX_PIN5, INPUT);
}

void loop() 
{
  finger1 = getDetails(FLEX_PIN1);
  finger2 = getDetails(FLEX_PIN2);
  finger3 = getDetails(FLEX_PIN3);
  finger4 = getDetails(FLEX_PIN4);
  finger5 = getDetails(FLEX_PIN5);

  Serial.println("\n");

  if (finger1 >= 1300 && finger1 <= 2300){
    if(finger2 >= 2300 && finger2 <=3300){
      if (finger3 >= 1700 && finger3 <= 2700){
        if(finger4 >= 2500 && finger4 <= 3500){
          if(finger5 >= 3000 && finger5 <=4100){
            Serial.println("A");
            }
          }
        }
      }
    }

    if (finger1 >= 1500 && finger1 <= 2600){
    if(finger2 >= 1400 && finger2 <=1700){
      if (finger3 >= 1400 && finger3 <= 1700){
        if(finger4 >= 1400 && finger4 <= 1700){
          if(finger5 >= 1400 && finger5 <=1700){
            Serial.println("B");
            }
          }
        }
      }
    }

     if (finger1 >= 1400 && finger1 <= 1700){
    if(finger2 >= 1600 && finger2 <=2200){
      if (finger3 >= 1500 && finger3 <= 2000){
        if(finger4 >= 1600 && finger4 <= 2500){
          if(finger5 >= 1600 && finger5 <=2300){
            Serial.println("C");
            }
          }
        }
      }
    }

      if (finger1 >= 1300 && finger1 <= 1500){
    if(finger2 >= 1800 && finger2 <=2600){
      if (finger3 >= 1600 && finger3 <= 2200){
        if(finger4 >= 2000 && finger4 <= 3000){
          if(finger5 >= 1400 && finger5 <=1600){
            Serial.println("D");
            }
          }
        }
      }
    }

       if (finger1 >= 2000 && finger1 <= 3000){
    if(finger2 >= 2200 && finger2 <= 2900){
      if (finger3 >= 1800 && finger3 <= 2300){
        if(finger4 >= 2300 && finger4 <= 3200){
          if(finger5 >= 2200 && finger5 <= 3100){
            Serial.println("E");
            }
          }
        }
      }
    }

     if (finger1 >= 1300 && finger1 <= 1600){
    if(finger2 >= 2000 && finger2 <= 2900){
      if (finger3 >= 1300 && finger3 <= 1500){
        if(finger4 >= 1400 && finger4 <= 1700){
          if(finger5 >= 1400 && finger5 <= 1600){
            Serial.println("F");
            }
          }
        }
      }
    }

    if (finger1 >= 1300 && finger1 <= 1600){
    if(finger2 >= 1500 && finger2 <= 1800){
      if (finger3 >= 1700 && finger3 <= 2500){
        if(finger4 >= 1800 && finger4 <= 3000){
          if(finger5 >= 2600 && finger5 <= 3100){
            Serial.println("G");
            }
          }
        }
      }
    }

    if (finger1 >= 1500 && finger1 <= 1700){
    if(finger2 >= 1500 && finger2 <= 1600){
      if (finger3 >= 1300 && finger3 <= 1500){
        if(finger4 >= 2800 && finger4 <= 3700){
          if(finger5 >= 2800 && finger5 <= 3500){
            Serial.println("H");
            }
          }
        }
      }
    }

    
  
 
  delay(1500);
}

float getDetails(int FLEX_PIN){
  
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
