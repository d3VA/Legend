(function() {
    var t, e = function(t, e) {
        function i() {
            this.constructor = t;
        }
        for (var n in e) r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype, t.prototype = new i(), t.__super__ = e.prototype, 
        t;
    }, r = {}.hasOwnProperty;
    (function(t) {
        function r(t, e, r) {
            var i, n;
            this.LEG_KEY = t, this.LEG_CONTROL = e, this.LEG_ID = this.LEG_KEY, n = r[this.LEG_KEY], 
            i = this.createDiv(this.LEG_ID, n), $("#" + this.LEG_ID).css("zoom", n.zoom), this.LEG_CONTROL[this.LEG_KEY].drag_mode && this.createCloseBtn(i), 
            this.createTitle(i, this.LEG_CONTROL[this.LEG_KEY].label), this.LEG_CONTROL[this.LEG_KEY].drag_mode && this.createDraggable(this.LEG_ID), 
            this.controlVisibility(this.visibility), this.hide();
        }
        e(r, t), r.prototype.SW_ICONS_PATH = "graphics/", r.prototype.LEG_KEY = null, r.prototype.LEG_ID = null, 
        r.prototype.LEG_CONTROL = null, r.prototype.visibility = !0, r.prototype.hide = function() {
            return $("#" + this.LEG_ID).hide();
        }, r.prototype.createCloseBtn = function(t) {
            return t.append("p").attr("class", "close").append("span").style("font-size", "20px").html("&times;").on("click", function(t) {
                return function() {
                    return d3.select("#leg_control").selectAll("input").filter(function(e) {
                        return e === t.LEG_KEY;
                    }).property("checked", !1), t.visibility = t.show(!1, t.LEG_ID);
                };
            }(this));
        }, r.prototype.controlVisibility = function(t) {
            return $("#leg_control").on("change", function(e) {
                return function() {
                    return d3.select("#leg_control").selectAll("input").filter(function(t) {
                        return t === e.LEG_KEY;
                    }).each(function(e) {
                        return t = d3.select(this).property("checked");
                    }), e.visibility = e.show(t, e.LEG_ID);
                };
            }(this));
        }, r.prototype.createClusterLegend = function(t, e, r) {
            return $("#" + this.LEG_ID).show(), $("#" + this.LEG_ID + " > div > p.leg_title").text("Clusters (" + e.length + "):"), 
            this.createSvgRect(this.LEG_ID, t, e, r), this.show(this.visibility, this.LEG_ID);
        }, r.prototype.createSoftwareLegend = function(t, e, r, i, n, o) {
            var s, l, a, c, p;
            return $("#" + this.LEG_ID).show(), c = this.createSvg(this.LEG_ID, r), p = this.createDynamicPart(c, e, r, n, o, "default"), 
            i.top += p, a = t.labels, l = t.names.map(function(t) {
                return function(e) {
                    return t.SW_ICONS_PATH + e.toLowerCase() + ".gif";
                };
            }(this)), this.createImage(c, a, l, i), s = a.length * (i.bottom + i.size - 2) + p + 25, 
            r.width, c.attr("height", s), this.show(this.visibility, this.LEG_ID);
        }, r.prototype.createDynamicPart = function(t, e, r, i, n, o) {
            var s, l, a;
            return a = d3.scale.category10().range(), s = this.leg_labels, l = [], s.forEach(function(t, r) {
                var i, o;
                return i = n.standard ? a[r % a.length] : n.color, o = 1 === e[r] ? i : "white", 
                l.push({
                    label: t,
                    color: i,
                    fillColor: o
                });
            }), this.createToggleCircles(t, l, r, i, o);
        }, r.prototype.createLicenseLegend = function(t, e, r, i, n) {
            var o, s, l;
            return $("#" + this.LEG_ID).show(), l = this.createSvg(this.LEG_ID, r), o = this.createDynamicPart(l, e, r, i, n, "default"), 
            s = t.labels[0], s = s.replace("All", "r"), l.append("image").attr("xlink:href", "graphics/r.gif").attr("width", 16).attr("height", 16).attr("x", 5).attr("y", o + 7), 
            l.append("g").append("text").attr("x", 26).attr("y", o + 20).style("font-size", "11px").style("font-weight", "bold").text(s), 
            l.attr("height", o + 30), this.show(this.visibility, this.LEG_ID);
        }, r.prototype.createTviewsLegend = function(t, e, r, i) {
            var n, o;
            return $("#" + this.LEG_ID).show(), $("#" + this.LEG_ID + " > div > p.leg_title").text("Task views (" + (t.length - 2) + "):"), 
            o = this.createSvg(this.LEG_ID, e), n = this.createDynamicPart(o, t, e, r, i, "two_columns"), 
            o.attr("height", n + 5), this.show(this.visibility, this.LEG_ID);
        }, r.prototype.createLayoutLegend = function(t, e) {
            var r, i;
            return i = e[this.LEG_KEY], $("#" + this.LEG_ID).show(), r = d3.select("#" + this.LEG_ID).append("div").attr("class", "legend_main"), 
            d3.keys(this.leg_info).forEach(function(t) {
                return function(e, n) {
                    return t.createSlider(r, t.leg_info, e, i);
                };
            }(this)), this.updateLayoutLegend(t), this.show(this.visibility, this.LEG_ID);
        }, r.prototype.updateLayoutLegend = function(t) {
            return d3.keys(this.leg_info).forEach(function(e) {
                return function(r, i) {
                    return t === e.leg_info[r].type ? d3.select("#div_slider_" + r).style("display", "inline-block") : d3.select("#div_slider_" + r).style("display", "none");
                };
            }(this));
        };
    })(t = function() {
        function t() {}
        return t.prototype.createDiv = function(t, e) {
            return d3.select("#controlpanel").append("div").attr("id", t).attr("class", "legend ui-widget-content").style("top", e.top + "px").style("left", e.left + "px").style("width", e.width + "px").append("div").attr("class", "legend_bar").style("cursor", "move");
        }, t.prototype.show = function(t, e) {
            return t ? $("#" + e).show() : $("#" + e).hide(), t;
        }, t.prototype.createTitle = function(t, e) {
            return t.append("p").attr("class", "leg_title").style("font-size", "15px").style("font-weight", "bold").text(e + ":");
        }, t.prototype.createSvg = function(t, e) {
            return d3.select("#" + t + "_div").remove(), d3.select("#" + t).style("width", e.width + "px").append("div").attr("id", t + "_div").attr("class", "svg_div legend_main").append("svg").attr("width", e.width - 20);
        }, t.prototype.createDraggable = function(t) {
            var e;
            return e = $("#" + t).css("zoom"), $("#" + t).draggable({
                handle: "div.legend_bar",
                zIndex: 130,
                drag: function(t, r) {
                    var i;
                    return i = 1 / e - 1, r.position.top += Math.round((r.position.top - r.originalPosition.top) * i), 
                    r.position.left += Math.round((r.position.left - r.originalPosition.left) * i);
                }
            });
        }, t.prototype.createSvgRect = function(t, e, r, i) {
            var n, o;
            return e.height = e.top + r.length * (e.size + e.bottom), e.max_height = e.max_height / e.zoom, 
            d3.select("#" + t + "_div").remove(), n = d3.select("#" + t).style("height", e.height + 70 + "px").style("max-height", e.max_height + 70 + "px").append("div").attr("id", t + "_div").attr("class", "svg_div legend_main_scroll").style("height", e.height + 7 + "px").style("max-height", e.max_height + "px"), 
            o = n.append("svg").attr("height", e.height), this.createRect(o, r, e, i);
        }, t.prototype.createRect = function(t, e, r, i) {
            var n;
            return (n = t.selectAll("rect").data(e)).enter().append("g").attr("class", i).attr("pointer-events", "all").attr("transform", function(t, e) {
                return "translate(" + r.left + "," + (e * (r.size + r.bottom) + r.top) + ")";
            }).on("mouseover", function(t, e) {
                return d3.select(this).select("rect").style("stroke-width", 2).style("stroke", "#1858e6"), 
                d3.select(this).select("text").style("fill", "#1858e6");
            }).on("mouseout", function(t, e) {
                return d3.select(this).select("rect").style("stroke-width", 0), d3.select(this).select("text").style("fill", "#000");
            }), n.append("rect").attr("width", r.size).attr("height", r.size).style("fill", function(t) {
                return t.color;
            }).style("cursor", "pointer"), n.append("text").attr("x", r.size + r.right).attr("y", r.size / 2 + 4).style("font-size", "11px").style("font-weight", "bold").style("cursor", "pointer").text(function(t) {
                return t.label;
            }), n.append("svg:rect").attr("width", r.left + r.size + r.right).attr("height", r.size).attr("fill", "none").style("cursor", "pointer");
        }, t.prototype.createToggleCircles = function(t, e, r, i, n) {
            var o, s, l, a;
            switch ((l = t.append("g").attr("transform", "translate(" + r.left + "," + r.top + ")").selectAll(".lg_software").data(e)).enter().append("g").attr("class", i).style("cursor", "pointer").attr("pointer-events", "all"), 
            l.append("circle").style("stroke", function(t) {
                return t.color;
            }).attr("stroke-width", 2).attr("fill", function(t) {
                return t.fillColor;
            }).attr("r", "5px"), l.append("text").text(function(t) {
                return t.label;
            }).style("font-size", "13px").style("font-weight", "bold").attr("dy", ".36em").attr("dx", "9"), 
            l.on("mouseover", function(t, e) {
                return d3.select(this).select("text").style("fill", "#1858e6").select("circle").style("stroke", "#1858e6");
            }).on("mouseout", function(t, e) {
                return d3.select(this).select("text").style("fill", "#000").select("circle").style("stroke", function(t) {
                    return t.color;
                });
            }), l.exit().remove(), n) {
              case "default":
                o = {
                    ypos: 5,
                    rows: 1,
                    newxpos: 5,
                    maxwidth: 0
                }, s = this.set_positions_for_toggle_circles(l, r, o);
                break;

              case "two_columns":
                o = {
                    rows: 1,
                    newxpos: 5
                }, s = this.set_positions_two_columns(l, r, o);
            }
            return a = s.rectpos, l.append("rect").attr("x", -6).attr("y", -6).attr("fill", "none").attr("width", function(t, e) {
                return a[e];
            }).attr("height", 15), s.height;
        }, t.prototype.set_positions_for_toggle_circles = function(t, e, r) {
            var i, n;
            return i = [], t.attr("transform", function(t, n) {
                var o, s, l;
                return o = d3.select(this).select("text").node().getComputedTextLength(), i[n] = o + 16, 
                o += e.dx, l = r.newxpos, s = e.left + l + o + e.right, e.width < s && (r.newxpos = l = 5, 
                r.ypos += e.dy, r.rows += 1), r.newxpos += o, r.newxpos > r.maxwidth && (r.maxwidth = r.newxpos), 
                "translate(" + l + "," + r.ypos + ")";
            }), n = {}, n.height = 5 + e.dy * r.rows, n.rectpos = i, n;
        }, t.prototype.set_positions_two_columns = function(t, e, r) {
            var i, n, o, s;
            return i = [], s = 10 - e.dy, o = r.newxpos, t.attr("transform", function(t, n) {
                var l;
                switch (1, l = d3.select(this).select("text").node().getComputedTextLength(), i[n] = l + 16, 
                l += e.dx, !1) {
                  case !(n < 19):
                    s += e.dy, r.rows += 1;
                    break;

                  case 19 !== n:
                    s = 10, o = r.newxpos + 205;
                    break;

                  case !(n > 19):
                    s += e.dy;
                }
                return "translate(" + o + "," + s + ")";
            }), n = {}, n.height = e.dy * (r.rows - 1) - 5, n.rectpos = i, n;
        }, t.prototype.createImage = function(t, e, r, i) {
            var n;
            return (n = t.selectAll("image").data(e)).enter().append("g").attr("transform", function(t, e) {
                return "translate(" + i.left + "," + (i.top + e * (i.size + i.bottom)) + ")";
            }), n.append("image").attr("xlink:href", function(t, e) {
                return r[e];
            }).attr("width", i.size).attr("height", i.size), n.append("text").attr("x", i.size + i.right).attr("y", i.size / 2 + 4).style("font-size", "11px").style("font-weight", "bold").text(function(t) {
                return t;
            });
        }, t.prototype.createSlider = function(t, e, r, i) {
            var n, o;
            return o = "slider_" + r, (n = t.append("div").attr("id", "div_slider_" + r)).append("span").style("font-size", "11px").style("font-weight", "bold").style("margin", "18px 10px 10px 5px").style("width", "110px").style("float", "left").text(e[r].title), 
            n.append("div").style("zoom", 1 / i.zoom).style("width", 220 * i.zoom + "px").style("float", "left").selectAll("input").data([ r ]).enter().append("input").attr("id", o).attr("type", "text").attr("name", r), 
            $("#" + o).ionRangeSlider({
                min: e[r].values[0],
                max: e[r].values[1],
                from: e[r].filter
            });
        }, t;
    }()), function(t) {
        function r(t, e, r) {
            var i, n, o;
            this.LEG_KEY = t, this.LEG_CONTROL = e, n = this.LEG_KEY, o = r[this.LEG_KEY], i = this.createDiv(n, o), 
            $("#" + n).css("zoom", o.zoom), this.LEG_CONTROL[this.LEG_KEY].drag_mode && (this.createDraggable(n), 
            this.createCloseBtn(i, n)), this.createTitle(i, this.LEG_CONTROL[this.LEG_KEY].label), 
            i = d3.select("#" + n).style("z-index", 160), this.createContent(i, n);
        }
        e(r, t), r.prototype.LEG_KEY = null, r.prototype.LEG_CONTROL = null, r.prototype.visibility = !0, 
        r.prototype.createCloseBtn = function(t, e) {
            return t.append("p").attr("class", "close").append("span").style("font-size", "20px").html("&times;").on("click", function(t) {
                return function() {
                    return d3.select("#leg_control").selectAll("input").filter(function(e) {
                        return e === t.LEG_KEY;
                    }).property("checked", !1), t.visibility = !1, t.show(t.visibility, e);
                };
            }(this));
        }, r.prototype.createContent = function(t, e) {
            var r, i, n;
            return i = t.append("form").attr("id", "leg_control").attr("action", "").attr("method", "post").style("padding", "15px").style("margin", "0"), 
            n = [], d3.entries(this.LEG_CONTROL).map(function(t) {
                return function(e) {
                    return e.value.active && e.key !== t.LEG_KEY && n.push(e.key), e.key;
                };
            }(this)), (r = i.selectAll("input").data(n)).enter().append("p").append("input").attr("checked", !0).attr("type", "checkbox"), 
            r.append("label").style("display", "inline").style("margin-left", "6px").style("cursor", "text").text(function(t) {
                return function(e) {
                    return t.LEG_CONTROL[e].label;
                };
            }(this)), this.show(this.visibility, e);
        };
    }(t), function() {
        function t() {}
        t.prototype.filter_type = null, t.prototype.filter_keys = null, t.prototype.filter_values = null, 
        t.prototype.filtered_names = null, t.prototype.legend_filter = function(t, e, r) {
            switch (this.filter_values = e, this.filter_type = t.type, this.filter_keys = t.array.map(function(t) {
                return t.key;
            }), this.filtered_names = this.get_filtered_names(this.filter_values, this.filter_keys, this.filter_type), 
            this.filtered_names[0]) {
              case "All":
                break;

              case "Rest":
                r = this.filter_for_rest(r);
                break;

              default:
                r = this.filter_for_normal(r);
            }
            return r;
        }, t.prototype.size_filter = function(t, e, r) {
            var i, n;
            return n = t.map(function(t) {
                return t[r];
            }).sort(d3.ascending), i = d3.quantile(n, e / 100), t.filter(function(t) {
                return t.playcount >= i;
            });
        }, t.prototype.get_cluster_leg_data = function(t, e, r) {
            var i, n, o, s, l;
            return n = this.getMatchingNodes(t, r), i = d3.entries(n).sort(function(t, e) {
                return e.value - t.value;
            }), l = {}, l.keys = i.map(function(t) {
                return t.key;
            }), o = i.length > 0 ? i.map(function(t) {
                return "(" + n[t.key] + ") " + t.key;
            }) : [ "(0)" ], d3.keys(n), s = i.map(function(t) {
                return e(t.key);
            }), l.nodes = [], o.forEach(function(t, e) {
                return l.nodes.push({
                    label: t,
                    color: s[e]
                });
            }), l;
        }, t.prototype.get_histo_leg_data = function(t, e, r) {
            var i, n, o, s, l, a;
            return n = this.getMatchingNodes(t, r), i = d3.entries(n).sort(function(t, e) {
                return e.value - t.value;
            }), l = {}, l.keys = i.map(function(t) {
                return t.key;
            }), i.length > 0 ? (o = i.map(function(t) {
                return t.key;
            }), a = i.map(function(t) {
                return n[t.key];
            })) : (o = [ "" ], a = [ 1 ]), d3.keys(n), s = i.map(function(t) {
                return e(t.key);
            }), l.nodes = [], o.forEach(function(t, e) {
                return l.nodes.push({
                    label: t,
                    value: a[e],
                    color: s[e]
                });
            }), l;
        }, t.prototype.get_toggle_circles_leg_data_multiple = function(t, e, r, i, n) {
            var o, s, l;
            return "All" === (s = this.get_filtered_names(t, r, n))[0] && (s = r.slice(0, +(r.length - 2) + 1 || 9e9)), 
            o = this.getMatchingNodesMultiple(e, i, s), l = {}, l.names = d3.keys(o), l.labels = d3.entries(o).map(function(t) {
                return t.key + ": " + t.value;
            }), l;
        }, t.prototype.getMatchingNodes = function(t, e) {
            var r;
            return r = {}, t.forEach(function(t) {
                var i;
                return null == r[i = t[e]] && (r[i] = 0), r[t[e]] += 1;
            }), r;
        }, t.prototype.getMatchingNodesMultiple = function(t, e, r) {
            var i;
            return i = {}, i.All = 0, t.forEach(function(t) {
                var n;
                return n = "," + t[e] + ",", r.forEach(function(t) {
                    if (n.toString().indexOf("," + t + ",") > -1) return null == i[t] && (i[t] = 0), 
                    i[t] += 1;
                }), i.All += 1;
            }), i;
        }, t.prototype.get_filtered_names = function(t, e, r) {
            var i;
            return i = [], t.forEach(function(t, n) {
                if (1 === t) return r.multiple, i.push(e[n]);
            }), i;
        }, t.prototype.filter_for_rest = function(t) {
            var e;
            return e = [], this.filter_keys.forEach(function(t, r) {
                return e.push(t);
            }), t = t.filter(function(t) {
                return function(r) {
                    var i;
                    return i = !0, r[t.filter_type.dfield].toString().split(",").forEach(function(t) {
                        if (e.indexOf(t) > -1) return i = !1;
                    }), i;
                };
            }(this));
        }, t.prototype.filter_for_normal = function(t) {
            return t = t.filter(function(t) {
                return function(e) {
                    var r, i;
                    return r = !1, "" !== (i = e[t.filter_type.dfield].toString()) && (t.filter_type.multiple ? (i = "," + i + ",", 
                    t.filtered_names.forEach(function(t) {
                        var e;
                        if (e = "," + t + ",", i.indexOf(e) > -1) return r = !0;
                    })) : t.filtered_names.forEach(function(t) {
                        if (i === t) return r = !0;
                    })), r;
                };
            }(this));
        };
    }();
}).call(this);