var buff=document.getElementById("buff");
buff.style.visibility="hidden";

var ulb=document.getElementById("ulb");
var ub=document.getElementById("ub");
var urb=document.getElementById("urb");
var ul=document.getElementById("ul");
var u=document.getElementById("u");
var ur=document.getElementById("ur");
var ulf=document.getElementById("ulf");
var uf=document.getElementById("uf");
var urf=document.getElementById("urf");

var lub=document.getElementById("lub");
var lu=document.getElementById("lu");
var luf=document.getElementById("luf");
var lb=document.getElementById("lb");
var l=document.getElementById("l");
var lf=document.getElementById("lf");
var ldb=document.getElementById("ldb");
var ld=document.getElementById("ld");
var ldf=document.getElementById("ldf");

var flu=document.getElementById("flu");
var fu=document.getElementById("fu");
var fru=document.getElementById("fru");
var fl=document.getElementById("fl");
var f=document.getElementById("f");
var fr=document.getElementById("fr");
var fld=document.getElementById("fld");
var fd=document.getElementById("fd");
var frd=document.getElementById("frd");

var ruf=document.getElementById("ruf");
var ru=document.getElementById("ru");
var rub=document.getElementById("rub");
var rf=document.getElementById("rf");
var r=document.getElementById("r");
var rb=document.getElementById("rb");
var rdf=document.getElementById("rdf");
var rd=document.getElementById("rd");
var rdb=document.getElementById("rdb");

var bru=document.getElementById("bru");
var bu=document.getElementById("bu");
var blu=document.getElementById("blu");
var br=document.getElementById("br");
var b=document.getElementById("b");
var bl=document.getElementById("bl");
var brd=document.getElementById("brd");
var bd=document.getElementById("bd");
var bld=document.getElementById("bld");

var dlf=document.getElementById("dlf");
var df=document.getElementById("df");
var drf=document.getElementById("drf");
var dl=document.getElementById("dl");
var d=document.getElementById("d");
var dr=document.getElementById("dr");
var dlb=document.getElementById("dlb");
var db=document.getElementById("db");
var drb=document.getElementById("drb");

function centerinit()
{
	r.style.backgroundColor="red";
	l.style.backgroundColor="orange";
	u.style.backgroundColor="white";
	d.style.backgroundColor="yellow";
	f.style.backgroundColor="green";
	b.style.backgroundColor="blue";
}

function init()
{
	ulb.style.backgroundColor="white";
	ub.style.backgroundColor="white";
	urb.style.backgroundColor="white";
	ul.style.backgroundColor="white";
	u.style.backgroundColor="white";
	ur.style.backgroundColor="white";
	ulf.style.backgroundColor="white";
	uf.style.backgroundColor="white";
	urf.style.backgroundColor="white";

	lub.style.backgroundColor="orange";
	lu.style.backgroundColor="orange";
	luf.style.backgroundColor="orange";
	lb.style.backgroundColor="orange";
	l.style.backgroundColor="orange";
	lf.style.backgroundColor="orange";
	ldb.style.backgroundColor="orange";
	ld.style.backgroundColor="orange";
	ldf.style.backgroundColor="orange";

	flu.style.backgroundColor="green";
	fu.style.backgroundColor="green";
	fru.style.backgroundColor="green";
	fl.style.backgroundColor="green";
	f.style.backgroundColor="green";
	fr.style.backgroundColor="green";
	fld.style.backgroundColor="green";
	fd.style.backgroundColor="green";
	frd.style.backgroundColor="green";
	
	ruf.style.backgroundColor="red";
	ru.style.backgroundColor="red";
	rub.style.backgroundColor="red";
	rf.style.backgroundColor="red";
	r.style.backgroundColor="red";
	rb.style.backgroundColor="red";
	rdf.style.backgroundColor="red";
	rd.style.backgroundColor="red";
	rdb.style.backgroundColor="red";

	bru.style.backgroundColor="blue";
	bu.style.backgroundColor="blue";
	blu.style.backgroundColor="blue";
	br.style.backgroundColor="blue";
	b.style.backgroundColor="blue";
	bl.style.backgroundColor="blue";
	brd.style.backgroundColor="blue";
	bd.style.backgroundColor="blue";
	bld.style.backgroundColor="blue";

	dlf.style.backgroundColor="yellow";
	df.style.backgroundColor="yellow";
	drf.style.backgroundColor="yellow";
	dl.style.backgroundColor="yellow";
	d.style.backgroundColor="yellow";
	dr.style.backgroundColor="yellow";
	dlb.style.backgroundColor="yellow";
	db.style.backgroundColor="yellow";
	drb.style.backgroundColor="yellow";
}

function ri()
{
	buff.style.backgroundColor=ur.style.backgroundColor;
	ur.style.backgroundColor=fr.style.backgroundColor;
	fr.style.backgroundColor=dr.style.backgroundColor;
	dr.style.backgroundColor=br.style.backgroundColor;
	br.style.backgroundColor=buff.style.backgroundColor;

	buff.style.backgroundColor=urb.style.backgroundColor;
	urb.style.backgroundColor=fru.style.backgroundColor;
	fru.style.backgroundColor=drf.style.backgroundColor;
	drf.style.backgroundColor=brd.style.backgroundColor;
	brd.style.backgroundColor=buff.style.backgroundColor;

	buff.style.backgroundColor=urf.style.backgroundColor;
	urf.style.backgroundColor=frd.style.backgroundColor;
	frd.style.backgroundColor=drb.style.backgroundColor;
	drb.style.backgroundColor=bru.style.backgroundColor;
	bru.style.backgroundColor=buff.style.backgroundColor;

	buff.style.backgroundColor=ru.style.backgroundColor;
	ru.style.backgroundColor=rf.style.backgroundColor;
	rf.style.backgroundColor=rd.style.backgroundColor;
	rd.style.backgroundColor=rb.style.backgroundColor;
	rb.style.backgroundColor=buff.style.backgroundColor;
	
	buff.style.backgroundColor=ruf.style.backgroundColor;
	ruf.style.backgroundColor=rdf.style.backgroundColor;
	rdf.style.backgroundColor=rdb.style.backgroundColor;
	rdb.style.backgroundColor=rub.style.backgroundColor;
	rub.style.backgroundColor=buff.style.backgroundColor;

	buff.style.backgroundColor="white";
}

function fn()
{
	buff.style.backgroundColor=uf.style.backgroundColor;
	uf.style.backgroundColor=lf.style.backgroundColor;
	lf.style.backgroundColor=df.style.backgroundColor;
	df.style.backgroundColor=rf.style.backgroundColor;
	rf.style.backgroundColor=buff.style.backgroundColor;

	buff.style.backgroundColor=urf.style.backgroundColor;
	urf.style.backgroundColor=luf.style.backgroundColor;
	luf.style.backgroundColor=dlf.style.backgroundColor;
	dlf.style.backgroundColor=rdf.style.backgroundColor;
	rdf.style.backgroundColor=buff.style.backgroundColor;

	buff.style.backgroundColor=ulf.style.backgroundColor;
	ulf.style.backgroundColor=ldf.style.backgroundColor;
	ldf.style.backgroundColor=drf.style.backgroundColor;
	drf.style.backgroundColor=ruf.style.backgroundColor;
	ruf.style.backgroundColor=buff.style.backgroundColor;

	buff.style.backgroundColor=fu.style.backgroundColor;
	fu.style.backgroundColor=fl.style.backgroundColor;
	fl.style.backgroundColor=fd.style.backgroundColor;
	fd.style.backgroundColor=fr.style.backgroundColor;
	fr.style.backgroundColor=buff.style.backgroundColor;
	
	buff.style.backgroundColor=flu.style.backgroundColor;
	flu.style.backgroundColor=fld.style.backgroundColor;
	fld.style.backgroundColor=frd.style.backgroundColor;
	frd.style.backgroundColor=fru.style.backgroundColor;
	fru.style.backgroundColor=buff.style.backgroundColor;

	buff.style.backgroundColor="white";
}

