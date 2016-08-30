export function fetchMedia() {
  return {
    type: "FETCH_MEDIA_FULFILLED",
    payload:
      {
        media:
          [
            { id: 1, name: "foo.mpg", date: '5/15/2014' },
            { id: 2, name: "bar.jpeg", date: '11/25/2012' }
          ],
        query: { fromDate: '1/18/1981', toDate: '8/30/2016', types: ['Video', 'Photo'] },
        dbLastUpdated: '7/4/2016'
      }
  }
}
