# Earth
Developer Challenge für tresmo von Pascal Uhe.

Eine kleine Applikation, geschrieben mit Angular, die die Länder der Erde auflistet. 
Die Liste lässt sich sortieren und mit einer Texteingabe filtern.

## Umsetzung
Da es frei gestellt war mit welchem Werkzeug die Anwendung umgesetzt wird, habe ich mich für Angular entschieden.
Der Grund dafür ist, dass ich vor einiger Zeit eine Schulung zum Thema Angular besuchen durfte.
Dieses angeeignete Wissen wollte ich jetzt auf die Probe stellen und eine "sinnvolle" Anwendung damit entwickeln.

Um die Anwendung ansehnlich zu gestalten habe ich mich für das Material-Layout entschieden.
Dies integriert sich hervorragend in Angular, da es die wichtigsten Komponenten bereits liefert.

Für die Mobile-Darstellung, bzw. damit die Anwendung responsive auf das jeweilige Device reagiert,
kommt das Material FlexLayout zum einsatz. Damit werden zwar keine alten Browser (IE < 9)) mehr unterstützt
hat mir aber dafür einiges an CSS-Ärger während der Entwicklung erspart.

Ich habe eine inline-Validierung für das Formular umgesetzt. Die Validierung beim Submit würde auch funktionierne,
wenn zugelassen werden würde, dass der Submit-Button auch bei fehlerhaftem Formular aktiviert bleibt.

## Herausforderungen
Die eigentliche Herausforderung der Aufgabe war es, dass ich noch nie eine echte Applikation mit Angular
geschrieben habe. Dementsprechend musste ich viel in der Dokumentation nachsehen und einiges auch ausprobieren.

Dieser Mehraufwand - auch mit dem Einlesen in das Material-Framework - hat mir letztendlich aber einiges an Aufwand erspart.
Die geforderten Features (Liste sortieren und filtern) kommen zum Beispiel mit Angular bzw. Material gleich mit.

## Optimierungen
Im ersten Schritt würde ich zur Optimierung der Usability eine Paginierung der Länderliste einbauen. Dabei wäre darauf 
zu achten, dass die Filterung dennoch über alle Daten und nicht nur die gerade zur Anzeige gebrachten funktioniert.

Auf der Detailseite müsste die Einbindung von Google Maps noch etwas optimiert werden.
Die API liefert leider nur ein Längen- und Breitengrad zurück, das wohl die Mitte des jeweiligen Landes markiert.

Dadurch ist es, meines Wissens nach, nicht Möglich die Zoom-Stufe der Karte auf das angezeigt Land anzupassen.

Man müsste also die Google Places API mit dem Namen des Landes abfragen. Hier bekommt man dann auch noch die Bounces des
angefragten Landes zurück. Damit kann man dann das Land in der korrekten Zoom-Stufe anzeigen.

