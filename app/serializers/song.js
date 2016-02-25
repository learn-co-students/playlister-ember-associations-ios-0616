import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
    album: { serialize: 'id' },
    artists: {serialize: 'ids'}
  }
});
