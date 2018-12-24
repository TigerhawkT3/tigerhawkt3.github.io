const canvas = document.getElementById('canvas');       // canvas for photo
const ctx = canvas.getContext('2d');                    // context for photo canvas
const image = new Image();                              // chosen image
const compare = document.getElementById('comparison');  // canvas for comparison
const compare_ctx = compare.getContext('2d');           // context for comparison canvas
const flee_button = document.getElementById('flee');    // button to switch result location
const result = document.getElementById('result')        // result div
var start_x = 0;                                        // x-coordinate where color selection box begins
var start_y = 0;                                        // y-coordinate for same
function realMousePos(c, e) {
    // get mouse position relative to canvas, https://stackoverflow.com/questions/17130395/
    let rect = c.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
}
function color_difference(a, b) {
    // calculate percentage match for two colors, https://stackoverflow.com/questions/1847092/
    let [r1, g1, b1] = a;
    let [r2, g2, b2] = b;
    return (186-(((r2-r1)*.4)**2 + ((g2-g1)*.6)**2 + ((b2-b1)*.1)**2)**0.5)*100/186;
}
function constrain(num, min=0, max=255) {
    // limit a value to given min and max, default 0-255
    return Math.max(min, Math.min(num, max));
}
function handleFileSelect(evt) {
    if (!evt.target.files[0]) return;
    URL.revokeObjectURL(image.src);                         // clear image src
    ctx.clearRect(0, 0, canvas.width, canvas.height);       // clear canvas
    image.src = URL.createObjectURL(evt.target.files[0]);   // new image src
    image.onload = function () {                            // when new image chosen,
        canvas.width = this.naturalWidth;                   // set canvas width
        canvas.height = this.naturalHeight;                 // set canvas height
        ctx.drawImage(this, 0, 0);                          // draw image
    }
    document.getElementById('suggestion').innerHTML = '';       // clear the suggestion area
    compare_ctx.clearRect(0, 0, compare.width, compare.height); // clear the comparison canvas
}
canvas.onmousedown = function(evt) {
    let coords = realMousePos(canvas, evt);
    [start_x, start_y] = [coords.x, coords.y]; // set starting x,y coordinates
    canvas.onmouseup = onmouseup;
}
flee_button.onclick = function(evt) {
    result.className = {NW: 'NE', NE:'SE', SE:'SW', SW:'NW'}[result.className]
}
function find_match(group) { // find closest match to a group of 3 color channels (in RGB)
    let [red, green, blue] = group;
    red = Math.floor(red/5)*5;      // simplify red with multiples of 5
    green = Math.floor(green/5)*5;  // same for green
    blue = Math.floor(blue/5)*5;    // and blue
    let best_key = '0-0-0';         // initial best key
    let best_score = 0;             // initial best score, guaranteed beatable due to rounding
    let limit = 100;                // any channel can be at most this far off from the target
    // loop through a block of similar colors
    for (let r_test=constrain(red-limit); r_test<constrain(red+limit); r_test+=5) {
        for (let g_test=constrain(green-limit); g_test<constrain(green+limit); g_test+=5) {
            for (let b_test=constrain(blue-limit); b_test<constrain(blue+limit); b_test+=5) {
                let key = `${r_test}-${g_test}-${b_test}`;
                if (!(key in colors)) continue; // skip the colors we don't have
                let score = color_difference([r_test, g_test, b_test], group); // get a score
                if (score > best_score) { // save key and score for high-scoring matches
                    best_key = key;
                    best_score = score;
                }
            }
        }
    }
    return [best_key, best_score];
}
function onmouseup(evt) {
    let coords = realMousePos(canvas, evt);     // get canvas coordinates
    let [end_x, end_y] = [coords.x, coords.y];  // set ending coordinates
    if (start_x === end_x) ++end_x;             // handle single-pixel selection for x
    if (start_y === end_y) ++end_y;             // handle single-pixel selection for y
    let data = ctx.getImageData(start_x, start_y, end_x-start_x, end_y-start_y).data; // get rgba data
    // transform flat [r1, g1, b1, a1, r2, g2, b2, a2...] array
    // to 2D [[r1, g1, b1, a1], [r2, g2, b2, a2]...]
    let channels = [[], [], [], []];
    for (let i = 0; i<data.length; i++) {
        channels[i%4].push(data[i]);
    }
    for (let i = 0; i<channels.length; i++) {
        let sum = 0;
        for (let x of channels[i]) sum += x;
        channels[i] = sum/channels[i].length;
    }
    let complement = channels.map(x => 255-x);                      // find color complement
    let [color_key, color_score] = find_match(channels);            // find pencils and score for color
    let [complement_key, complement_score] = find_match(complement);// find pencils and score for complement
    compare_ctx.clearRect(0, 0, compare.width, compare.height);     // clear comparison canvas
    document.getElementById('suggestion').innerHTML = '';           // clear suggestion area
    let [r1, g1, b1] = color_key.split('-').map(x => parseInt(x));  // get rgb values from key
    let [r2, g2, b2] = channels;                                    // get rgb values from previewed color
    let [r3, g3, b3] = complement;                                  // get rgb values from complement
    compare_ctx.fillStyle = `rgb(${r1}, ${g1}, ${b1})`;             // set best match color
    compare_ctx.fillRect(0, 0, compare.width/3, compare.height);    // fill first third of the comparison canvas
    compare_ctx.fillStyle = `rgb(${r2}, ${g2}, ${b2})`;             // set desired color
    compare_ctx.fillRect(compare.width/3, 0, compare.width*2/3, compare.height); // fill second third of the comparison canvas
    compare_ctx.fillStyle = `rgb(${r3}, ${g3}, ${b3})`;             // set complement color
    compare_ctx.fillRect(compare.width*2/3, 0, compare.width, compare.height); // fill last third of the comparison canvas
    let message = '<strong>Suggested pencils:</strong><br />' + colors[color_key] +
                  '<br /><strong>Complement pencils:</strong><br />' + colors[complement_key] +
                  `<br /><strong>${Math.round(color_score*10)/10}%</strong> color match (left) compared to original ` +
                  `sample (middle) and <strong>${Math.round(complement_score*10)/10}%</strong> complement match (right).`;
    document.getElementById('suggestion').innerHTML = message;      // suggest a color
    canvas.onmouseup = null;
}
document.getElementById('chooser').addEventListener('change', handleFileSelect, false);