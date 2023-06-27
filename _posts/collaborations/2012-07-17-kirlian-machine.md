---
category: collaboration
title: Kirlian Machine
---
![]({{ "assets/collaborations/kirlian-machine/kirlian-draw.jpg" | relative_url }})

While I was the technical coordinator at Marginalia+Lab, I got to work with artists/photographers Livia Chagas and Wemersom Machado on their project, *Auras*.

Conceptually, the project makes reference to Walter Benjamin's use of the word "aura" to classify authenticity, and to the more mystical and pedestrian uses of the word "aura". Practically, we were trying to take picture of people's energy fields and other invisible phenomena.

So we started by trying to replicate a process called electrophotography using a [Kirlian machine](http://en.wikipedia.org/wiki/Kirlian_photography){:target="_blank"}. This is a way to capture images by ionizing moisture particles in the air around an object. Or... by exciting their aura.

One can read more about this process on wikipedia, but, basically, we needed to build a high-voltage, high-frequency, low-amperage signal generator that could be used to ionize stuff and glow.

That meant building up a super high potential difference between two electrodes, of, say, 20,000 volts, and making sure this super high voltage was accompanied by super low current, so we didn’t kill anyone or anything.

Our first idea was to just use a neon sign transformer, but those are a little too expensive and hard to find in Belo Horizonte, so we set out to build our own high-voltage signal circuit using an automotive ignition coil. The first circuit we built was based on this schematic, that we found [here](http://wiki.4hv.org/index.php/Ignition_Coil){:target="_blank"}, along with an explanation of how/why it works (the thing on the right is the coil):

![]({{ "assets/collaborations/kirlian-machine/kirlian-ignitioncoildimmer.jpg" | relative_url }})

This worked pretty well, and we made some fun sparks with it, but since the signal is more or less coming straight from the wall, its current is still pretty high, and it does not feel nice to touch the high-voltage wires. It would be pretty hard (and painful) to use this to take electro-pictures of living things.

{% include youtube.html id="BvtqCPFPWos" ratio="16x9" %}

What is missing from the previous circuit is some current-limiting components (resistor and a fuse), and a way to flicker the transformer on and off at higher frequencies. Both of these things should contribute to a less painful and dangerous aura-imaging experience.

Here’s the circuit diagram for the final version of our Kirlian Machine. It is based on a circuit designed by some people in the 80s, and it uses an astable 555 timer to control the frequency at which the coil turns on and off.

![]({{ "assets/collaborations/kirlian-machine/kirlian-sch.png" | relative_url }})

Here’s a picture of the circuit on a board. That huge white ceramic rectangle is the 20-watt resistor, and that big yellow thing to the right is the ignition coil:

![]({{ "assets/collaborations/kirlian-machine/kirlian-board.jpg" | relative_url }})

Now we could take pictures of our hands, fingers and other body parts without getting hurt, and of plants and coins without starting fires:

{% include swipebox.html prefix="kirlian_" %}
