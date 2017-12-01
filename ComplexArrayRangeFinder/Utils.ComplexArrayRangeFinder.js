var Utils = Utils || {};

Utils.FindArrayRange = {
	query: {
		index: 0,
		type: "IK",
		code: "K1",
		period: "18",
		amount: "5000"
	},
	temp: {},
	init: function() {
		this.checkElementIsExist() && this.startWidget()
	},
	checkElementIsExist: function() {
		return !0
	},
	startWidget: function() {
		this.atStart()
	},
	atStart: function() {
		console.log("Utils.modules.findrate started"), this.getRateFromCampaignTable("IK", "K1", "17", "14200")
	},
	getRateFromCampaignTable: function(t, e, i, r) {
		return this.setTempQuery(t, e, i, r), this.checkValuesByQueryType(), this.setTempQueryisValid(), this.getQueryResult()
	},
	getQueryResult: function() {
		var t = this.query.index;
		return CreditData[t][this.query.type][t][this.query.code][this.query.period][t][this.query.amount]
	},
	setTempQuery: function(t, e, i, r) {
		this.temp.index = 0, this.temp.type = t, this.temp.code = e, this.temp.period = i, this.temp.amount = r
	},
	setTempQueryisValid: function() {
		this.query = this.temp
	},
	checkValuesByQueryType: function() {
		this.findPeriodValueforQuery() && this.findAmountValueforQuery()
	},
	findPeriodValueforQuery: function() {
		var t = CreditData[0][this.temp.type][0][this.temp.code],
			e = Math.abs(this.temp.period),
			i = [];
		for (var r in t) i.push(Math.abs(r));
		this.temp.period = this.findClosestinArray(i, e).toString()
	},
	findAmountValueforQuery: function() {
		var t = CreditData[0][this.temp.type][0][this.temp.code][this.temp.period][0],
			e = Math.abs(this.temp.amount),
			i = [];
		for (var r in t) i.push(Math.abs(r));
		this.temp.amount = this.findClosestinArray(i, e).toString()
	},
	findClosestinArray: function(t, e) {
		for (var i = Math.max.apply(null, t), r = 0; r < t.length; r++) t[r] >= e && t[r] < i && (i = t[r]);
		return i
	}
}, Utils.FindArrayRange.init();