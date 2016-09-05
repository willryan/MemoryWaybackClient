const allMedia = [
  { name: "aaa.jpg", type: "Photo", date: "01/04/1995" },
  { name: "bbb.jpg", type: "Photo", date: "02/08/1996" },
  { name: "ccc.mpg", type: "Video", date: "03/12/1997" },
  { name: "ddd.jpg", type: "Photo", date: "04/16/1998" },
  { name: "eee.jpg", type: "Photo", date: "05/20/1999" },
  { name: "fff.jpg", type: "Photo", date: "06/24/2000" },
  { name: "ggg.mpg", type: "Video", date: "07/28/2001" },
  { name: "hhh.mpg", type: "Video", date: "08/02/2002" },
  { name: "iii.jpg", type: "Photo", date: "09/06/2003" },
  { name: "jjj.jpg", type: "Photo", date: "10/10/2004" },
  { name: "kkk.mpg", type: "Video", date: "11/14/2005" },
  { name: "lll.mpg", type: "Video", date: "12/18/2006" },
  { name: "mmm.jpg", type: "Photo", date: "01/22/2007" },
  { name: "nnn.jpg", type: "Photo", date: "02/26/2008" },
  { name: "ooo.jpg", type: "Photo", date: "03/30/2009" },
  { name: "ppp.jpg", type: "Photo", date: "04/01/2010" },
  { name: "qqq.jpg", type: "Photo", date: "05/05/2011" },
  { name: "rrr.mpg", type: "Video", date: "06/09/2012" },
  { name: "sss.jpg", type: "Photo", date: "07/13/2013" },
  { name: "ttt.jpg", type: "Photo", date: "08/17/2014" },
  { name: "uuu.mpg", type: "Video", date: "09/21/2015" }
].map(({name, type, date}, i) => {
  return { id: (i + 1), name, type, date: new Date(date) }
});

export function fetchMedia(query) {
  const types = query.types.filter(t => t.include).map(t => t.name);
  const fromDate = new Date(query.fromDate);
  const toDate = new Date(query.toDate);
  const media = allMedia.filter(m =>
    types.includes(m.type) && m.date >= fromDate && m.date <= toDate
  );
  return {
    type: "FETCH_MEDIA_FULFILLED",
    payload: {
      media,
      query,
      dbLastUpdated: '7/4/2016'
    }
  }
}

export function changeRange(range) {
  return {
    type: "CHANGE_QUERY_RANGE",
    payload: range
  }
}

export function toggleFilter(name) {
  return {
    type: "TOGGLE_FILTER",
    payload: {name}
  }
}