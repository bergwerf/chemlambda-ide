#############################
The concept behind Chemlambda
#############################
In Chemlambda we try to emulate molecular chemistry in a highly simplified way.
Just like in real chemistry there are atoms and molecules. Molecules consist of
bonded atoms and each kind of atom can have a defined number of bonds. There are
only single bonded atoms in the current version of Chemlambda. Moreover, only
the connections (bonds) between atoms are interesting and not the position or
velocity of atoms like in classical chemistry. [1]_

Inspiration
===========
Chemlambda is actually a way of executing lambda calculus using only graph
rewrites. This was inspired by the similarities of chemical reactions and a
graphic representation of lambda calculus developed by Marius Buliga.
:cite:`Bul13`

.. [1]

   On a small level, chemical reactions are orchestrated by randomness. However,
   when increasing the scale of the system, the ratio and speed of a certain
   reaction can be predicted with high precision eliminating the notion of
   randomness. Chemlambda uses this approach to simulate the reactions between
   atoms and molecules.

.. bibliography:: /references.bib
