var padding = {top:20, right:40, bottom:0, left:0},
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top  - padding.bottom,
    r = Math.min(w, h)/2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.category20();

// Updated data with Constitution articles
var data = [
    // Preamble
    {"label":"Preamble", "value":0, "description":"Introductory statement of the Constitution.", "fact":"Declares India as a Sovereign, Socialist, Secular, Democratic Republic."},

    // Fundamental Duties
    {"label":"Article 51A(a)", "value":51, "description":"Abide by the Constitution (Article 51A).", "fact":"Upholds constitutional values."},
    {"label":"Article 51A(b)", "value":51, "description":"Cherish national freedom ideals (Article 51A).", "fact":"Values freedom struggle ideals."},
    {"label":"Article 51A(c)", "value":51, "description":"Protect India's unity (Article 51A).", "fact":"Supports national unity."},
    {"label":"Article 51A(d)", "value":51, "description":"Defend the country (Article 51A).", "fact":"Encourages national defense."},
    {"label":"Article 51A(e)", "value":51, "description":"Promote harmony (Article 51A).", "fact":"Fosters unity among people."},
    {"label":"Article 51A(f)", "value":51, "description":"Preserve cultural heritage (Article 51A).", "fact":"Protects cultural diversity."},
    {"label":"Article 51A(g)", "value":51, "description":"Protect environment (Article 51A).", "fact":"Supports environmental conservation."},
    {"label":"Article 51A(h)", "value":51, "description":"Develop scientific temper (Article 51A).", "fact":"Promotes rational thinking."},
    {"label":"Article 51A(i)", "value":51, "description":"Safeguard public property (Article 51A).", "fact":"Protects public assets."},
    {"label":"Article 51A(j)", "value":51, "description":"Strive for excellence (Article 51A).", "fact":"Encourages personal growth."},

    // Fundamental Rights
    {"label":"Article 12", "value":12, "description":"Defines the State for Fundamental Rights (Article 12).", "fact":"Establishes State for Fundamental Rights."},
    {"label":"Article 13", "value":13, "description":"Laws violating rights are void (Article 13).", "fact":"Invalidates rights-violating laws."},
    {"label":"Article 14", "value":14, "description":"Right to equality before law (Article 14).", "fact":"Ensures legal equality."},
    {"label":"Article 15", "value":15, "description":"Prohibits discrimination (Article 15).", "fact":"Forbids discriminatory practices."},
    {"label":"Article 16", "value":16, "description":"Equal opportunity in employment (Article 16).", "fact":"Guarantees fair job opportunities."},
    {"label":"Article 17", "value":17, "description":"Abolishes untouchability (Article 17).", "fact":"Bans untouchability practices."},
    {"label":"Article 18", "value":18, "description":"Abolishes titles (Article 18).", "fact":"Prohibits non-military titles."},
    {"label":"Article 19", "value":19, "description":"Protection of freedoms (Article 19).", "fact":"Secures freedoms of speech, assembly, etc."},
    {"label":"Article 20", "value":20, "description":"Protection against self-incrimination (Article 20).", "fact":"Protects against self-incrimination and double jeopardy."},
    {"label":"Article 21", "value":21, "description":"Right to life and liberty (Article 21).", "fact":"Guarantees personal freedom."},
    {"label":"Article 22", "value":22, "description":"Protection against wrongful detention (Article 22).", "fact":"Safeguards against arbitrary detention."},
    {"label":"Article 23", "value":23, "description":"Prohibits trafficking and forced labor (Article 23).", "fact":"Bans trafficking and forced labor."},
    {"label":"Article 24", "value":24, "description":"Prohibits child labor in hazardous industries (Article 24).", "fact":"Forbids child labor in dangerous jobs."},
    {"label":"Article 25", "value":25, "description":"Freedom of religion (Article 25).", "fact":"Ensures religious freedom."},
    {"label":"Article 26", "value":26, "description":"Manage religious affairs (Article 26).", "fact":"Autonomy in religious practices."},
    {"label":"Article 27", "value":27, "description":"No tax for religion promotion (Article 27).", "fact":"Prohibits religious tax use."},
    {"label":"Article 28", "value":28, "description":"No compulsory religious education (Article 28).", "fact":"Forbids mandatory religious instruction in schools."},
    {"label":"Article 29", "value":29, "description":"Protect minority interests (Article 29).", "fact":"Safeguards minority cultural rights."},
    {"label":"Article 30", "value":30, "description":"Right to establish and administer educational institutions (Article 30).", "fact":"Supports minority educational institutions."},

    // Directive Principles of State Policy
    {"label":"Article 36", "value":36, "description":"Definition of State (Article 36).", "fact":"Defines State for DPSP purposes."},
    {"label":"Article 37", "value":37, "description":"DPSPs are non-justiciable (Article 37).", "fact":"DPSPs are not enforceable by courts."},
    {"label":"Article 38", "value":38, "description":"Promote welfare of people (Article 38).", "fact":"Aims to ensure social and economic justice."},
    {"label":"Article 39", "value":39, "description":"Certain principles of policy to be followed (Article 39).", "fact":"Guides state policy for equitable distribution."},
    {"label":"Article 40", "value":40, "description":"Organization of village panchayats (Article 40).", "fact":"Encourages local self-government."},
    {"label":"Article 41", "value":41, "description":"Right to work, education, and public assistance (Article 41).", "fact":"Supports basic livelihood and assistance."},
    {"label":"Article 42", "value":42, "description":"Provision for just and humane conditions of work (Article 42).", "fact":"Ensures fair working conditions."},
    {"label":"Article 43", "value":43, "description":"Living wage for workers (Article 43).", "fact":"Supports fair wages and working conditions."},
    {"label":"Article 44", "value":44, "description":"Uniform civil code (Article 44).", "fact":"Promotes a uniform code for all citizens."},
    {"label":"Article 45", "value":45, "description":"Free and compulsory education for children (Article 45).", "fact":"Guarantees educational access for children."},
    {"label":"Article 46", "value":46, "description":"Promote educational and economic interests of SCs and STs (Article 46).", "fact":"Supports disadvantaged groups."},
    {"label":"Article 47", "value":47, "description":"Duty of State to raise standard of living (Article 47).", "fact":"Aims to improve living standards."},
    {"label":"Article 48", "value":48, "description":"Organization of agriculture and animal husbandry (Article 48).", "fact":"Encourages efficient farming practices."},
    {"label":"Article 49", "value":49, "description":"Protection of monuments and places (Article 49).", "fact":"Preserves cultural heritage."},
    {"label":"Article 50", "value":50, "description":"Separation of judiciary from executive (Article 50).", "fact":"Ensures independence of judiciary."},
    {"label":"Article 51", "value":51, "description":"Promotion of international peace and security (Article 51).", "fact":"Supports global peace initiatives."}
];




var svg = d3.select('#chart')
    .append("svg")
    .data([data])
    .attr("width", w + padding.left + padding.right)
    .attr("height", h + padding.top + padding.bottom);

var container = svg.append("g")
    .attr("class", "chartholder")
    .attr("transform", "translate(" + (w/2 + padding.left) + "," + (h/2 + padding.top) + ")");

var vis = container.append("g");

var pie = d3.layout.pie().sort(null).value(function(d){ return 1; });
var arc = d3.svg.arc().outerRadius(r);
var arcs = vis.selectAll("g.slice")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "slice");

arcs.append("path")
    .attr("fill", function(d, i){ return color(i); })
    .attr("d", function (d) { return arc(d); });

arcs.append("text")
    .attr("transform", function(d){
        d.innerRadius = 0;
        d.outerRadius = r;
        d.angle = (d.startAngle + d.endAngle)/2;
        return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")translate(" + (d.outerRadius -10) +")";
    })
    .attr("text-anchor", "end")
    .text(function(d, i) {
        return data[i].label;
    });

container.on("click", spin);

function spin(d){
    container.on("click", null);
    if(oldpick.length === data.length){
        console.log("All articles have been shown.");
        container.on("click", null);
        return;
    }
    var ps = 360/data.length,
        pieslice = Math.round(1440/data.length),
        rng = Math.floor((Math.random() * 1440) + 360);

    rotation = (Math.round(rng / ps) * ps);
    picked = Math.round(data.length - (rotation % 360)/ps);
    picked = picked >= data.length ? (picked % data.length) : picked;

    if(oldpick.indexOf(picked) !== -1){
        d3.select(this).call(spin);
        return;
    } else {
        oldpick.push(picked);
    }

    rotation += 90 - Math.round(ps/2);
    vis.transition()
        .duration(3000)
        .attrTween("transform", rotTween)
        .each("end", function(){
            d3.select(".slice:nth-child(" + (picked + 1) + ") path")
                .attr("fill", "#111");

            d3.select("#question h1")
                .text(data[picked].description + " Fun Fact: " + data[picked].fact);

            oldrotation = rotation;

            console.log("Selected article:", data[picked].value);

            container.on("click", spin);
        });
}

function rotTween(to) {
    var i = d3.interpolate(oldrotation % 360, rotation);
    return function(t) {
        return "rotate(" + i(t) + ")";
    };
}

svg.append("g")
    .attr("transform", "translate(" + (w + padding.left + padding.right) + "," + ((h/2) + padding.top) + ")")
    .append("path")
    .attr("d", "M-" + (r * 0.15) + ",0L0," + (r * 0.05) + "L0,-" + (r * 0.05) + "Z")
    .style({"fill":"black"});

container.append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 60)
    .style({"fill":"white","cursor":"pointer"});

container.append("text")
    .attr("x", 0)
    .attr("y", 15)
    .attr("text-anchor", "middle")
    .text("SPIN")
    .style({"font-weight":"bold", "font-size":"30px"});
