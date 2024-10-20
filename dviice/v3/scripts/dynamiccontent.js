img = {diatonicrichter: '<img src="diatonic.png">',
       piano: '<img src="piano.png">',
       guitar: '<img src="guitar.png">',
       chromatic12: '<img src="chromatic12.png">',
       chromatic16: '<img src="chromatic16.png">',
       diatonicminor: '<img src="diatonicminor.png">',
       diatonicpowerbender: '<img src="powerbender.png">',
       ukuleletxt: '<img src="ukulele.png">'}
menu = {chromatic12: "<option value='c4'>Standard (C4)</option><option value='c3'>Tenor (C3)</option>",
        chromatic16: "<option value='c3'>Standard (C3)</option>",
        diatonicminor: `<option value='ab'>Abm</option>
<option value='a'>Am</option>
<option value='bb'>Bbm</option>
<option value='b'>Bm</option>
<option value='c'>Cm</option>
<option value='db'>Dbm</option>
<option value='d'>Dm</option>
<option value='eb'>Ebm</option>
<option value='e'>Em</option>
<option value='f'>Fm</option>
<option value='fs'>F#m</option>
<option value='g'>Gm</option>`,
        diatonicpowerbender: `<option value='lowf'>Low F</option>
<option value='g'>G</option>
<option value='ab'>Ab</option>
<option value='a'>A</option>
<option value='bb'>Bb</option>
<option value='b'>B</option>
<option value='c'>C</option>
<option value='db'>Db</option>
<option value='d'>D</option>
<option value='eb'>Eb</option>
<option value='e'>E</option>
<option value='f'>F</option>
<option value='fs'>F#</option>
<option value='highg'>High G</option>
`,
        diatonicrichter: `<option value='lowf'>Low F</option>
<option value='g'>G</option>
<option value='ab'>Ab</option>
<option value='a'>A</option>
<option value='bb'>Bb</option>
<option value='b'>B</option>
<option value='c'>C</option>
<option value='db'>Db</option>
<option value='d'>D</option>
<option value='eb'>Eb</option>
<option value='e'>E</option>
<option value='f'>F</option>
<option value='fs'>F#</option>
<option value='highg'>High G</option>
`,
        guitar: `<option value='standard'>Standard</option>
<option value='opena'>Open A</option>
<option value='openb'>Open B</option>
<option value='openc'>Open C</option>
<option value='opend'>Open D</option>
<option value='opene'>Open E</option>
<option value='openf'>Open F</option>
<option value='openg'>Open G</option>
<option value='dobro'>Dobro</option>
<option value='allfourth'>All fourths</option>
<option value='dadgad'>DADGAD</option>
<option value='lowd'>Low D</option>
<option value='dropd'>Drop D</option>
<option value='eb'>Eb</option>
<option value='doubledropd'>Double drop D</option>
<option value='dadgaddropc'>DADGAD drop C</option>
<option value='baritonefourth'>Baritone p. 4th BEADF#B</option>
<option value='baritonefifth'>Baritone p. 5th ADGCEA</option>
<option value='baritonethird'>Baritone m. 3rd CFA#D#GC</option>
`,
        instrument1: `<option value='diatonicrichter'>Richter diatonic</option>
<option value='diatonicminor'>Diatonic minor</option>
<option value='diatonicpowerbender'>Powerbender diatonic</option>
`,
        instrument2: `<option value='piano'>Piano</option>
<option value='diatonicrichter'>Richter diatonic</option>
<option value='diatonicminor'>Diatonic minor</option>
<option value='diatonicpowerbender'>Powerbender diatonic</option>
<option value='chromatic12'>Chromatic 12</option>
<option value='ukulele'>Ukulele</option>
`,
        instrument3: `<option value='guitar'>Guitar</option>
<option value='piano'>Piano</option>
<option value='diatonicrichter'>Richter diatonic</option>
<option value='diatonicminor'>Diatonic minor</option>
<option value='diatonicpowerbender'>Powerbender diatonic</option>
<option value='chromatic12'>Chromatic 12</option>
<option value='chromatic16'>Chromatic 16</option>
<option value='ukulele'>Ukulele</option>
`,
        piano: "<option value='standard'>Standard</option>",
        ukulele: `<option value='bass'>Bass EADG</option>
<option value='baritone'>Baritone DGBE</option>
<option value='tenorlinear'>Tenor linear</option>
<option value='tenordgbe'>Tenor DGBE</option>
<option value='sopranogcea'>Soprano GCEA</option>
<option value='sopranoadfsb'>Soprano ADF#B</option>
<option value='sopraninocfad'>Sopranino CFAD</option>
<option value='sopraninodgbe'>Sopranino DGBE</option>`}
instrument = {bass1:
`
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="F3" tone="174.61" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="B2" tone="123.47" src="blank.png" width="27" height="33"></td>
</tr>
<tr>
<td><img name="G2" tone="98" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="E2" tone="82.41" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="C2" tone="65.41" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="A1" tone="55" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="F1" tone="43.65" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="D1" tone="36.71" src="blank.png" width="27" height="29"></td>
</tr>`,
bass2:
`
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="E3" tone="164.81" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="C3" tone="130.81" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="A2" onmouseover="A2on()"
onmouseout="A2off()" tone="110" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="F2" tone="87.31" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="D2" tone="73.42" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="B1" tone="61.74" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="G1" tone="49" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="E1" tone="41.2" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="C1" tone="32.7" src="blank.png" width="27" height="29"></td>
</tr>`,
bass3:
`
<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="F3s" tone="185" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="20"></td>
</tr>
<tr>
<td><img name="C3s" tone="138.59" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="A2s" tone="116.54" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="F2s" tone="92.5" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="20"></td>
</tr>
<tr>
<td><img name="C2s" tone="69.3" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="A1s" tone="58.27" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="F1s" tone="46.25" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="20"></td>
</tr>
<tr>
<td><img name="C1s" tone="34.65" src="blank.png" width="27" height="29"></td>
</tr>`,
bass4:
`
<tr>
<td><img name="G3s" tone="207.65" src="blank.png" width="27" height="26"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="21"></td>
</tr>
<tr>
<td><img name="D3s" tone="155.56" src="blank.png" width="27" height="26"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="35"></td>
</tr>
<tr>
<td><img name="G2s" tone="103.83" src="blank.png" width="27" height="26"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="23"></td>
</tr>
<tr>
<td><img name="D2s" tone="77.78" src="blank.png" width="27" height="26"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="33"></td>
</tr>
<tr>
<td><img name="G1s" tone="51.91" src="blank.png" width="27" height="26"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="21"></td>
</tr>
<tr>
<td><img name="D1s" tone="38.89" src="blank.png" width="27" height="26"></td>
</tr>`,
chromatic12c3:
`<tr>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>`,
chromatic12c4:
`<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
</tr>`,
chromatic16c3:
`<tr>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicminora:
`﻿<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicminorab:
`﻿<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicminorb:
`﻿<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicminorbb:
`﻿<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicminorc:
`﻿<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicminord:
`﻿<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicminordb:
`﻿<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicminore:
`﻿<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicminoreb:
`﻿<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicminorf:
`﻿<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicminorg:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicminorgb:
`﻿<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbendera:
`﻿<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbenderab:
`﻿<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbenderb:
`﻿<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbenderbb:
`﻿<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbenderc:
`<tr>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbenderd:
`﻿<tr>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbenderdb:
`﻿<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbendere:
`﻿<tr>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
<td><img name="F7" tone="2793.83" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
<td><img name="E7" tone="2637.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbendereb:
`﻿<tr>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
<td><img name="E7" tone="2637.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbenderf:
`﻿<tr>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
<td><img name="F7s" tone="2959.96" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
<td><img name="F7" tone="2793.83" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
<td><img name="E7" tone="2637.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbenderfs:
`﻿<tr>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
<td><img name="G7" tone="3135.96" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
<td><img name="F7s" tone="2959.96" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
<td><img name="F7" tone="2793.83" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
<td><img name="E7" tone="2637.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbenderg:
`﻿<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbenderhighg:
`﻿<tr>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
<td><img name="G7s" tone="3322.44" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
<td><img name="E7" tone="2637.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
<td><img name="G7" tone="3135.96" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
<td><img name="F7s" tone="2959.96" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
<td><img name="F7" tone="2793.83" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicpowerbenderlowf:
`﻿<tr>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichtera:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichterab:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichterb:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichterbb:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichterc:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichterd:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichterdb:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichtere:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
<td><img name="E7" tone="2637.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
<td><img name="F7" tone="2793.83" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichtereb:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
<td><img name="E7" tone="2637.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichterf:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
<td><img name="E7" tone="2637.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
<td><img name="F7" tone="2793.83" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
<td><img name="F7s" tone="2959.96" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichterfs:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="E7" tone="2637.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
<td><img name="F7" tone="2793.83" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
<td><img name="F7s" tone="2959.96" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
<td><img name="G7" tone="3135.96" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichterg:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichterhighg:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="F7" tone="2793.83" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
<td><img name="F7s" tone="2959.96" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
<td><img name="G7" tone="3135.96" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
<td><img name="E7" tone="2637.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
<td><img name="G7s" tone="3322.44" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
diatonicrichterlowf:
`<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
<td><img src="blank.png" width="63" height="63"></td>
</tr>`,
guitarbaritonefourth:
`<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B1" tone="61.74" src="blank.png" width="63" height="63"></td>
<td><img name="C2" tone="65.41" src="blank.png" width="63" height="63"></td>
<td><img name="C2s" tone="69.3" src="blank.png" width="63" height="63"></td>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
</tr>`,
guitarbaritonefifth:
`<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A1" tone="55" src="blank.png" width="63" height="63"></td>
<td><img name="A1s" tone="58.27" src="blank.png" width="63" height="63"></td>
<td><img name="B1" tone="61.74" src="blank.png" width="63" height="63"></td>
<td><img name="C2" tone="65.41" src="blank.png" width="63" height="63"></td>
<td><img name="C2s" tone="69.3" src="blank.png" width="63" height="63"></td>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
</tr>`,
guitarbaritonethird:
`<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C2" tone="65.41" src="blank.png" width="63" height="63"></td>
<td><img name="C2s" tone="69.3" src="blank.png" width="63" height="63"></td>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
</tr>`,
guitarallfourth:
`<tr>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
</tr>`,
guitardadgad:
`<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
</tr>`,
guitardadgaddropc:
`<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C2" tone="65.41" src="blank.png" width="63" height="63"></td>
<td><img name="C2s" tone="69.3" src="blank.png" width="63" height="63"></td>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
</tr>`,
guitardobro:
`<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
</tr>`,
guitardoubledropd:
`<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
</tr>`,
guitardropd:
`<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
</tr>`,
guitareb:
`<tr>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
</tr>`,
guitarlowd:
`<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
</tr>`,
guitaropena:
`<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
</tr>`,
guitaropenb:
`<tr>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
</tr>`,
guitaropenc:
`<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C2" tone="65.41" src="blank.png" width="63" height="63"></td>
<td><img name="C2s" tone="69.3" src="blank.png" width="63" height="63"></td>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
</tr>`,
guitaropend:
`<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
</tr>`,
guitaropene:
`<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
</tr>`,
guitaropenf:
`<tr>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
</tr>`,
guitaropeng:
`<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
</tr>`,
guitarstandard:
`<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
</tr>`,
pianostandard:
`<tr>
<td><img name="C1" tone="32.7" src="blank.png" width="63" height="63"></td>
<td><img name="C1s" tone="34.65" src="blank.png" width="63" height="63"></td>
<td><img name="D1" tone="36.71" src="blank.png" width="63" height="63"></td>
<td><img name="D1s" tone="38.89" src="blank.png" width="63" height="63"></td>
<td><img name="E1" tone="41.2" src="blank.png" width="63" height="63"></td>
<td><img name="F1" tone="43.65" src="blank.png" width="63" height="63"></td>
<td><img name="F1s" tone="46.25" src="blank.png" width="63" height="63"></td>
<td><img name="G1" tone="49" src="blank.png" width="63" height="63"></td>
<td><img name="G1s" tone="51.91" src="blank.png" width="63" height="63"></td>
<td><img name="A1" tone="55" src="blank.png" width="63" height="63"></td>
<td><img name="A1s" tone="58.27" src="blank.png" width="63" height="63"></td>
<td><img name="B1" tone="61.74" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C2" tone="65.41" src="blank.png" width="63" height="63"></td>
<td><img name="C2s" tone="69.3" src="blank.png" width="63" height="63"></td>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
<td><img name="E7" tone="2637.02" src="blank.png" width="63" height="63"></td>
<td><img name="F7" tone="2793.83" src="blank.png" width="63" height="63"></td>
<td><img name="F7s" tone="2959.96" src="blank.png" width="63" height="63"></td>
<td><img name="G7" tone="3135.96" src="blank.png" width="63" height="63"></td>
<td><img name="G7s" tone="3322.44" src="blank.png" width="63" height="63"></td>
<td><img name="A7" tone="3520" src="blank.png" width="63" height="63"></td>
<td><img name="A7s" tone="3729.31" src="blank.png" width="63" height="63"></td>
<td><img name="B7" tone="3951.07" src="blank.png" width="63" height="63"></td>
</tr>`,
treble1:
`<tr>
<td><img name="A7" tone="3520" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="F7" tone="2793.83" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="D7" tone="2349.32" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="B6" tone="1975.53" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="G6" tone="1567.98" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="E6" tone="1318.51" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="C6" tone="1046.5" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="A5" tone="880" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="F5" tone="698.46" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="D5" tone="587.33" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="B4" tone="493.88" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="G4" tone="392" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="27" height="30"></td>
</tr>`,
treble2:
`
<tr>
<td><img name="B7" tone="3951.07" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="G7" tone="3135.96" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="E7" tone="2637.02" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="C7" tone="2093" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="A6" tone="1760" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="F6" tone="1396.91" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="D6" tone="1174.66" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="B5" tone="987.77" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="G5" tone="783.99" src="blank.png" width="27" height="31"></td>
</tr>
<tr>
<td><img name="E5" tone="659.26" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="C5" tone="523.25" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="A4" tone="440" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="F4" tone="349.23" src="blank.png" width="27" height="30"></td>
</tr>
<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="27" height="29"></td>
</tr>`,
treble3:
`
<tr>
<td><img name="A7s" tone="3729.31" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="F7s" tone="2959.96" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="20"></td>
</tr>
<tr>
<td><img name="C7s" tone="2217.46" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="A6s" tone="1864.66" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="F6s" tone="1479.98" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="20"></td>
</tr>
<tr>
<td><img name="C6s" tone="1108.73" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="A5s" tone="932.33" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="F5s" tone="739.99" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="20"></td>
</tr>
<tr>
<td><img name="C5s" tone="554.37" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="A4s" tone="466.16" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img name="F4s" tone="369.99" src="blank.png" width="27" height="29"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="20"></td>
</tr>
<tr>
<td><img name="C4s" tone="277.18" src="blank.png" width="27" height="26"></td>
</tr>`,
treble4:
`
<tr>
<td><img name="G7s" tone="3322.44" src="blank.png" width="27" height="27"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="19"></td>
</tr>
<tr>
<td><img name="D7s" tone="2489.02" src="blank.png" width="27" height="26"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="35"></td>
</tr>
<tr>
<td><img name="G6s" tone="1661.22" src="blank.png" width="27" height="26"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="22"></td>
</tr>
<tr>
<td><img name="D6s" tone="1244.51" src="blank.png" width="27" height="25"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="33"></td>
</tr>
<tr>
<td><img name="G5s" tone="830.61" src="blank.png" width="27" height="27"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="20"></td>
</tr>
<tr>
<td><img name="D5s" tone="622.25" src="blank.png" width="27" height="24"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="37"></td>
</tr>
<tr>
<td><img name="G4s" tone="415.3" src="blank.png" width="27" height="26"></td>
</tr>
<tr>
<td><img src="blank.png" width="27" height="20"></td>
</tr>
<tr>
<td><img name="D4s" tone="311.13" src="blank.png" width="27" height="26"></td>
</tr>`,
ukulelebaritone:
`<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
</tr>`,
ukulelebass:
`<tr>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
<td><img name="D3s" tone="155.56" src="blank.png" width="63" height="63"></td>
<td><img name="E3" tone="164.81" src="blank.png" width="63" height="63"></td>
<td><img name="F3" tone="174.61" src="blank.png" width="63" height="63"></td>
<td><img name="F3s" tone="185" src="blank.png" width="63" height="63"></td>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
<td><img name="A2s" tone="116.54" src="blank.png" width="63" height="63"></td>
<td><img name="B2" tone="123.47" src="blank.png" width="63" height="63"></td>
<td><img name="C3" tone="130.81" src="blank.png" width="63" height="63"></td>
<td><img name="C3s" tone="138.59" src="blank.png" width="63" height="63"></td>
<td><img name="D3" tone="146.83" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A1" tone="55" src="blank.png" width="63" height="63"></td>
<td><img name="A1s" tone="58.27" src="blank.png" width="63" height="63"></td>
<td><img name="B1" tone="61.74" src="blank.png" width="63" height="63"></td>
<td><img name="C2" tone="65.41" src="blank.png" width="63" height="63"></td>
<td><img name="C2s" tone="69.3" src="blank.png" width="63" height="63"></td>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
<td><img name="F2" tone="87.31" src="blank.png" width="63" height="63"></td>
<td><img name="F2s" tone="92.5" src="blank.png" width="63" height="63"></td>
<td><img name="G2" tone="98" src="blank.png" width="63" height="63"></td>
<td><img name="G2s" tone="103.83" src="blank.png" width="63" height="63"></td>
<td><img name="A2" tone="110" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E1" tone="41.2" src="blank.png" width="63" height="63"></td>
<td><img name="F1" tone="43.65" src="blank.png" width="63" height="63"></td>
<td><img name="F1s" tone="46.25" src="blank.png" width="63" height="63"></td>
<td><img name="G1" tone="49" src="blank.png" width="63" height="63"></td>
<td><img name="G1s" tone="51.91" src="blank.png" width="63" height="63"></td>
<td><img name="A1" tone="55" src="blank.png" width="63" height="63"></td>
<td><img name="A1s" tone="58.27" src="blank.png" width="63" height="63"></td>
<td><img name="B1" tone="61.74" src="blank.png" width="63" height="63"></td>
<td><img name="C2" tone="65.41" src="blank.png" width="63" height="63"></td>
<td><img name="C2s" tone="69.3" src="blank.png" width="63" height="63"></td>
<td><img name="D2" tone="73.42" src="blank.png" width="63" height="63"></td>
<td><img name="D2s" tone="77.78" src="blank.png" width="63" height="63"></td>
<td><img name="E2" tone="82.41" src="blank.png" width="63" height="63"></td>
</tr>`,
ukulelesopraninocfad:
`<tr>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
</tr>`,
ukulelesopraninodgbe:
`<tr>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
<td><img name="C7" tone="2093" src="blank.png" width="63" height="63"></td>
<td><img name="C7s" tone="2217.46" src="blank.png" width="63" height="63"></td>
<td><img name="D7" tone="2349.32" src="blank.png" width="63" height="63"></td>
<td><img name="D7s" tone="2489.02" src="blank.png" width="63" height="63"></td>
<td><img name="E7" tone="2637.02" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
<td><img name="C6" tone="1046.5" src="blank.png" width="63" height="63"></td>
<td><img name="C6s" tone="1108.73" src="blank.png" width="63" height="63"></td>
<td><img name="D6" tone="1174.66" src="blank.png" width="63" height="63"></td>
<td><img name="D6s" tone="1244.51" src="blank.png" width="63" height="63"></td>
<td><img name="E6" tone="1318.51" src="blank.png" width="63" height="63"></td>
<td><img name="F6" tone="1396.91" src="blank.png" width="63" height="63"></td>
<td><img name="F6s" tone="1479.98" src="blank.png" width="63" height="63"></td>
<td><img name="G6" tone="1567.98" src="blank.png" width="63" height="63"></td>
<td><img name="G6s" tone="1661.22" src="blank.png" width="63" height="63"></td>
<td><img name="A6" tone="1760" src="blank.png" width="63" height="63"></td>
<td><img name="A6s" tone="1864.66" src="blank.png" width="63" height="63"></td>
<td><img name="B6" tone="1975.53" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
</tr>`,
ukulelesopranoadfsb:
`<tr>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
<td><img name="A5s" tone="932.33" src="blank.png" width="63" height="63"></td>
<td><img name="B5" tone="987.77" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
</tr>`,
ukulelesopranogcea:
`<tr>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
</tr>`,
ukuleletenordgbe:
`<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
</tr>`,
ukuleletenorlinear:
`<tr>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
<td><img name="F5" tone="698.46" src="blank.png" width="63" height="63"></td>
<td><img name="F5s" tone="739.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5" tone="783.99" src="blank.png" width="63" height="63"></td>
<td><img name="G5s" tone="830.61" src="blank.png" width="63" height="63"></td>
<td><img name="A5" tone="880" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
<td><img name="C5s" tone="554.37" src="blank.png" width="63" height="63"></td>
<td><img name="D5" tone="587.33" src="blank.png" width="63" height="63"></td>
<td><img name="D5s" tone="622.25" src="blank.png" width="63" height="63"></td>
<td><img name="E5" tone="659.26" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
<td><img name="G4s" tone="415.3" src="blank.png" width="63" height="63"></td>
<td><img name="A4" tone="440" src="blank.png" width="63" height="63"></td>
<td><img name="A4s" tone="466.16" src="blank.png" width="63" height="63"></td>
<td><img name="B4" tone="493.88" src="blank.png" width="63" height="63"></td>
<td><img name="C5" tone="523.25" src="blank.png" width="63" height="63"></td>
</tr>
<tr>
<td><img name="G3" tone="196" src="blank.png" width="63" height="63"></td>
<td><img name="G3s" tone="207.65" src="blank.png" width="63" height="63"></td>
<td><img name="A3" tone="220" src="blank.png" width="63" height="63"></td>
<td><img name="A3s" tone="233.08" src="blank.png" width="63" height="63"></td>
<td><img name="B3" tone="246.94" src="blank.png" width="63" height="63"></td>
<td><img name="C4" tone="261.63" src="blank.png" width="63" height="63"></td>
<td><img name="C4s" tone="277.18" src="blank.png" width="63" height="63"></td>
<td><img name="D4" tone="293.66" src="blank.png" width="63" height="63"></td>
<td><img name="D4s" tone="311.13" src="blank.png" width="63" height="63"></td>
<td><img name="E4" tone="329.63" src="blank.png" width="63" height="63"></td>
<td><img name="F4" tone="349.23" src="blank.png" width="63" height="63"></td>
<td><img name="F4s" tone="369.99" src="blank.png" width="63" height="63"></td>
<td><img name="G4" tone="392" src="blank.png" width="63" height="63"></td>
</tr>`}
