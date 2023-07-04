---
category: collaboration
title: Os Que Chegam Com a Noite
github: https://github.com/thiagohersan/osQueChegamComANoite
www: http://oqccan.pedroveneroso.com/
collab: https://vimeo.com/cimarcelle/
cover: assets/collaborations/os-que-chegam-com-a-noite/cinthia_pedro_01.jpg
---
{% include video.html
  webm="assets/collaborations/os-que-chegam-com-a-noite/oqccan.webm"
  image="assets/collaborations/os-que-chegam-com-a-noite/cinthia_pedro_01.jpg"
%}

In September of 2012, I helped my good friends [Cinthia Marcelle](https://vimeo.com/cimarcelle){:target="_blank"} and [Pedro Veneroso](http://pedroveneroso.com/){:target="_blank"} with their project: *Os Que Chegam Com a Noite*, for Belo Horizonte’s version of the [Nuit Blanche](http://en.wikipedia.org/wiki/Nuit_Blanche){:target="_blank"}.

The project was an installation/intervention that modified the behavior of the lights in a park in order to create unique spacial/temporal environments during the event’s duration. It also provided for an interesting visual experience because it switched the lights on and off intermittently in specific patterns.

{% include vimeo.html id="70635175" %}

In order to do that, we had to build circuits that were capable of switching lights on and off based on signals coming from a microcontroller through an RF transmitter. The circuit is really quite simple, it consists of an atmega328 chip, a 434 MHz RF receiver and a relay. I helped prototype the receiver circuit, but Pedro Cimini was responsible for the final board design that we used. It looked something liked this:

{% include swipebox.html prefix="osQueChegamCircuit_" %}

70 boards later... I was responsible for programming them so that they would behave correctly when they received the control signals from the transmitting microcontroller. The [code for the receiver](https://github.com/thiagohersan/osQueChegamComANoite/tree/master/Arduino/osQueChegam-rx){:target="_blank"} circuits is also quite simple. It consists of a finite state machine that keeps track of whether the board is in receive mode or random mode. While in receive mode, it waits for signals to switch the lights, and if it goes 5 minutes without receiving any signal, it switches to random mode. In random mode it switches the lights on and off every 4 to 8 seconds.

The code for the transmitter was a little more complicated because it had to send the on/off signals to all of the receivers... Since I created a graphical interface to visualize the light animations, we decided to use the same interface to generate the code for the transmitter.

![]({{ "assets/collaborations/os-que-chegam-com-a-noite/osQueChegamGUI.jpg" | relative_url }})
