#############################
The concept behind Chemlambda
#############################
In Chemlambda we try to emulate molecular chemistry in a highly simplified way.
Just like in real chemistry there are atoms and molecules. Molecules consist of
a center atom which is connected to surrounding atoms. A surrounding atom is
either an ingoing or an outgoing atoms. Ingoing atoms can connect to outgoing
atoms from other molecules and vice versa.

Inspiration
===========
Chemlambda is actually a way of representing lambda calculus using only graph
rewrites. :cite:`Bul13a` This was inspired by the similarities between chemical
reactions and a graphic representation of lambda calculus developed by Marius
Buliga. :cite:`Bul13b`

Graph rewrites
==============
Reactions in chemlambda are caused by graph rewrites. A graph rewrite is applied
to a chain of specific connections between an molecules (usually only one
connection). The center atoms from all molecules are replaced by a number of new
center atoms which are then connect to the molecules that the original center
atoms were connected to before the rewrite. A chemlambda environment can have
an unlimited number of rewrites defined. The rewrites define the behaviour of
chemlambda.

.. bibliography:: /references.bib
