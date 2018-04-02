
#include<Wire.h>// import Wire.h library
const int MPU=0x68; //declare and initialize a variable. The pin "AD0" selects for I2C address is 0x68.
int16_t AcX,AcY,AcZ,Tmp,GyX,GyY,GyZ;//crating integer type variable and they are 16bit integers.

//This function will get executed when sketch runs. 
void setup(){
  Wire.begin();//Initiate the Wire library and join the I2C bus.
  Wire.beginTransmission(MPU);//Begin a transmission to the I2C slave device with the given address.
  Wire.write(0x6B); //Accessing the register 6B - Power Management 1
  Wire.write(0);    // set to zero to call the device
  Wire.endTransmission(true); //Ends a transmission to a slave device that was begun by beginTransmission()
  Serial.begin(9600);//Set the data rate in bits per second (baud) for serial data transmission. 
}
//this loop runs from top to bottom again and again.
void loop(){
  Wire.beginTransmission(MPU);
  Wire.write(0x3B);  // starting with register 0x3B (ACCEL_XOUT_H)
  Wire.endTransmission(false);
  Wire.requestFrom(MPU,12,true);// request a total of 12 registers  

  //get the values from the registers.
  GyX=Wire.read()<<8|Wire.read();  
  GyY=Wire.read()<<8|Wire.read();  
  GyZ=Wire.read()<<8|Wire.read();  


  //This will print the Gyroscopic values return by the registers. These values are in raw format.
  Serial.print("Gyroscope: ");
  Serial.print("X = "); Serial.print(GyX);
  Serial.print(" | Y = "); Serial.print(GyY);
  Serial.print(" | Z = "); Serial.println(GyZ);
  Serial.println(" ");
}
