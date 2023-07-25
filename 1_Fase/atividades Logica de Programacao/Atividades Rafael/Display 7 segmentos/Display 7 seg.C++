// C++ code
//

#define aa 1
#define bb 2
#define cc 3
#define dd 4
#define ee 5
#define ff 6
#define gg 7
#define dp 8

int tempo = 1000;
int cont = 0;

void setup()
{
  pinMode(aa, OUTPUT);
  pinMode(bb, OUTPUT);
  pinMode(cc, OUTPUT);
  pinMode(dd, OUTPUT);
  pinMode(ee, OUTPUT);
  pinMode(ff, OUTPUT);
  pinMode(gg, OUTPUT);
  pinMode(dp, OUTPUT);
}

void loop()
{
    switch(cont)(
        case 0: zero();
        break;

        case 1: um();
        break;

        case 2: dois();
        break;

        case 3: tres();
        break;

        case 4: quatro();
        break;

        case 5: cinco();
        break;

        case 6: seis();
        break;

        case 7: sete();
        break;

        case 8: oito();
        break;

        case 9: nove();
        break;
    )
    delay(tempo);
   cont ++;
   if(cont == 10) cont = 0;
 
}  


void nove()
{
  digitalWrite(aa, 1);
  digitalWrite(bb, 1);
  digitalWrite(cc, 1);
  digitalWrite(dd, 1);
  digitalWrite(ee, 0);
  digitalWrite(ff, 1);
  digitalWrite(gg, 1);
  digitalWrite(dp, 0);

}

void oito()
{
  digitalWrite(aa, 1);
  digitalWrite(bb, 1);
  digitalWrite(cc, 1);
  digitalWrite(dd, 1);
  digitalWrite(ee, 1);
  digitalWrite(ff, 1);
  digitalWrite(gg, 1);
  digitalWrite(dp, 0);

}

void sete()
{
  digitalWrite(aa, 1);
  digitalWrite(bb, 1);
  digitalWrite(cc, 1);
  digitalWrite(dd, 0);
  digitalWrite(ee, 0);
  digitalWrite(ff, 0);
  digitalWrite(gg, 0);
  digitalWrite(dp, 0);

}

void seis()
{
  digitalWrite(aa, 1);
  digitalWrite(bb, 0);
  digitalWrite(cc, 1);
  digitalWrite(dd, 1);
  digitalWrite(ee, 1);
  digitalWrite(ff, 1);
  digitalWrite(gg, 1);
  digitalWrite(dp, 0);

}

void cinco()
{
  digitalWrite(aa, 1);
  digitalWrite(bb, 0);
  digitalWrite(cc, 1);
  digitalWrite(dd, 1);
  digitalWrite(ee, 0);
  digitalWrite(ff, 1);
  digitalWrite(gg, 1);
  digitalWrite(dp, 0);

}

void quatro()
{
  digitalWrite(aa, 0);
  digitalWrite(bb, 1);
  digitalWrite(cc, 1);
  digitalWrite(dd, 0);
  digitalWrite(ee, 0);
  digitalWrite(ff, 1);
  digitalWrite(gg, 1);
  digitalWrite(dp, 0);

}

void tres()
{
  digitalWrite(aa, 1);
  digitalWrite(bb, 1);
  digitalWrite(cc, 1);
  digitalWrite(dd, 1);
  digitalWrite(ee, 0);
  digitalWrite(ff, 0);
  digitalWrite(gg, 1);
  digitalWrite(dp, 0);

}

void dois()
{
  digitalWrite(aa, 1);
  digitalWrite(bb, 1);
  digitalWrite(cc, 0);
  digitalWrite(dd, 1);
  digitalWrite(ee, 1);
  digitalWrite(ff, 0);
  digitalWrite(gg, 1);
  digitalWrite(dp, 0);

}

void um()
{
  digitalWrite(aa, 0);
  digitalWrite(bb, 1);
  digitalWrite(cc, 1);
  digitalWrite(dd, 0);
  digitalWrite(ee, 0);
  digitalWrite(ff, 0);
  digitalWrite(gg, 0);
  digitalWrite(dp, 0);

}

void zero()
{
  digitalWrite(aa, 1);
  digitalWrite(bb, 1);
  digitalWrite(cc, 1);
  digitalWrite(dd, 1);
  digitalWrite(ee, 1);
  digitalWrite(ff, 1);
  digitalWrite(gg, 0);
  digitalWrite(dp, 0);

}
