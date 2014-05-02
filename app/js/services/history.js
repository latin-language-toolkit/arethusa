"use strict";

angular.module('arethusa').service('history', function(configurator) {
  this.conf = configurator.configurationFor('history');
  this.template = this.conf.template;
  this.maxSize = this.conf.maxSize || 20;

  /* global HistoryObj */
  this.history = new HistoryObj(this.maxSize);
  this.position = 0;

  this.save = function(event) {
    this.clearObsoleteHistory();
    this.position = 0;
    this.history.unshift(event);
  };

  this.clearObsoleteHistory = function() {
    this.history.elements.splice(0, this.position);
  };

  this.undo = function() {
    if (this.canBeUndone()) {
      var event = this.history.elements[this.position];
      this.position++;
      event.target[event.property] = event.oldVal;
    }
  };

  this.canBeUndone = function() {
    return ! (this.history.isEmpty() || this.history.size() === this.position);
  };

  this.redo = function() {
    if (this.canBeRedone()) {
      this.position--;
      var event = this.history.elements[this.position];
      event.target[event.property] = event.newVal;
    }
  };

  this.canBeRedone = function() {
    return this.position !== 0;
  };
});
