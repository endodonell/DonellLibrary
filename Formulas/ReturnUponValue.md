=query('TabName'!A4:R,"select A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R where Q = 'SpecifiedValue'",0)
//Says look at the range |'TabName'!A4:R|, where 'TabName'! is the name of the tab on the google sheet and A4:R is the range of that tab that you want examined.
//Everything from A4 to R4 down to the bottom of the rest of the sheet.
//Everything after |"select | and before | where| names the columns to return if the SpecifiedValue is found
//The SpecifiedValue is what you are wanting to examine to make sure and include in the display if it exists.  It is in singular quotes because in my example it
//was text.  For example, I only wanted to return the row of data if column Q had 'RCB' for reverse client bill.  If it wasn't text I would have dropped the '
//the comma and zero indicated that my data range |'TabName'!A4:R| did not have a header row.  If the first two rows were header i would have used ,2 at the end.
