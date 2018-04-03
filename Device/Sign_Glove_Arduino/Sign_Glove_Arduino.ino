/****************************************************************************************************************************************************

SignSpeaks - Sign language translation glove
Author - Return 0;

******************************************************************************************************************************************************/


//----------------------------------------------------------------------FLEX SENSORS---------------------------------------------------------------------------------------

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
float finger1;
float finger2;
float finger3;
float finger4;
float finger5;

String prevPhrase = "";
//----------------------------------------------------------------------ACCELEROMETER---------------------------------------------------------------------------------------
#include<Wire.h>
const int MPU_addr=0x68;  // I2C address of the MPU-6050
int16_t AcX,AcY,AcZ;
double TotalAcc;

//----------------------------------------------------------------------BLUETOOTH---------------------------------------------------------------------------------------
#include <SoftwareSerial.h>
SoftwareSerial BTserial(5, 6); // RX | TX
// Connect the HC-06 TX to the Arduino RX on pin 2. 
// Connect the HC-06 RX to the Arduino TX on pin 3 through a voltage divider.

//This function is called once when the code starts. This method is to initilize pin modes.
void setup() 
{

  Wire.begin();
  Wire.beginTransmission(MPU_addr);
  Wire.write(0x6B);  // PWR_MGMT_1 register
  Wire.write(0);     // set to zero (wakes up the MPU-6050)
  Wire.endTransmission(true);
  Serial.begin(9600);
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  //Define above declared ports as input ports.
  pinMode(FLEX_PIN1, INPUT);
  pinMode(FLEX_PIN2, INPUT);
  pinMode(FLEX_PIN3, INPUT);
  pinMode(FLEX_PIN4, INPUT);
  pinMode(FLEX_PIN5, INPUT);

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  // HC-06 default serial speed is 9600
    BTserial.begin(9600);  
}


//This function will be executed from top to bottom, until the bottom function is reached. And this will run again and again.
void loop() 
{
  
  Wire.beginTransmission(MPU_addr);
  Wire.write(0x3B);  // starting with register 0x3B (ACCEL_XOUT_H)
  Wire.endTransmission(false);
  Wire.requestFrom(MPU_addr,14,true);  // request a total of 14 registers
  AcX=Wire.read()<<8|Wire.read();  // 0x3B (ACCEL_XOUT_H) & 0x3C (ACCEL_XOUT_L)    
  AcY=Wire.read()<<8|Wire.read();  // 0x3D (ACCEL_YOUT_H) & 0x3E (ACCEL_YOUT_L)
  AcZ=Wire.read()<<8|Wire.read();  // 0x3F (ACCEL_ZOUT_H) & 0x40 (ACCEL_ZOUT_L)

  TotalAcc = sqrt(pow(AcX,2) +  pow(AcY,2) +  pow(AcZ,2))/1000;
  
  //call the getDetails function and pass the analog pin port number as an argument and get the return value.
  finger1 = getDetails(FLEX_PIN1);
  finger2 = getDetails(FLEX_PIN2);
  finger3 = getDetails(FLEX_PIN3);
  finger4 = getDetails(FLEX_PIN4);
  finger5 = getDetails(FLEX_PIN5);

  String phrase = String(finger1)+":"+String(finger2)+":"+String(finger3)+":"+String(finger4)+":"+String(finger5)+":"+String(TotalAcc);
  if(phrase != prevPhrase){
    Serial.println(phrase+"\n");   
    BTserial.println(phrase + "\n");
    prevPhrase = phrase;
  }

  //set a delay of 1 second
  delay(1000);

  
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
  
  return flexKR;
 
}
