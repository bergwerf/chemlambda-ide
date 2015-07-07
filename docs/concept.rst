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

   In real chemistry the position and velocity of atoms does matter to calculate
   the occurrence of reactions. Chemlambda takes a different approach. Just like
   the biological reactions in cells that are performed by proteins and 'random'
   collisions, Chemlambda reactions are based on which graph rewrites are
   ultimately possible.

.. bibliography:: /references.bib
