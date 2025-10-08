import React, { useEffect, useRef } from "react";
import { X, Search, MapPin, CalendarDays, Tag, ChevronDown, Trash2, Filter } from "lucide-react";
import { eventTypes } from "../../utils/data";
const EventFilter = ({
  searchDraft,
  setSearchDraft,
  typeDraft,
  setTypeDraft,
  monthDraft,
  setMonthDraft,
  nearDraft,
  setNearDraft,
  fromDraft,
  setFromDraft,
  toDraft,
  setToDraft,
  handleSubmit,
  handleSearchSubmit,
  handleClear,
  showFilters,
  setShowFilters,
}) => {

  const panelRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setShowFilters(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setShowFilters]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setShowFilters]);

  return (
    <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="flex-1 w-full">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchDraft}
              onChange={(e) => setSearchDraft(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearchSubmit()}
              placeholder="Search events..."
              aria-label="Search events"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
            />
            {searchDraft && (
              <button
                type="button"
                onClick={() => setSearchDraft("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearchSubmit}
          className="px-6 py-3 bg-indigo-700 text-white rounded-lg font-medium hover:bg-indigo-800 hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-full md:w-auto"
        >
          Search Events
        </button>

        {/* Enhanced Filter Component */}
        <div className="relative">
          {/* Filter Toggle Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-50 text-indigo-700 rounded-lg font-medium hover:bg-indigo-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-full md:w-auto"
          >
            <Filter className="w-5 h-5" />
            <span>Filters</span>
            {(typeDraft || monthDraft || nearDraft || fromDraft || toDraft) && (
              <span className="ml-1 bg-indigo-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {[typeDraft, monthDraft, nearDraft, fromDraft, toDraft].filter(Boolean).length}
              </span>
            )}
          </button>

          {/* Dropdown Panel */}
          {showFilters && (
            <div
              ref={panelRef}
              role="dialog"
              aria-label="Filter Events"
              className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 rounded-2xl shadow-xl z-50 p-6 animate-fadeIn"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Filter Events</h2>
                <button onClick={() => setShowFilters(false)} className="text-gray-400 hover:text-gray-600 p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Event Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Event Type</label>
                  <div className="relative">
                    <Tag className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <select
                      value={typeDraft}
                      onChange={(e) => setTypeDraft(e.target.value)}
                      aria-label="Event type"
                      className="w-full pl-10 rounded-md border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm h-10 appearance-none"
                    >
                      <option value="">All Types</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t}>
                          {t.charAt(0).toUpperCase() + t.slice(1)}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Month */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Month</label>
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <select
                      value={monthDraft}
                      onChange={(e) => setMonthDraft(e.target.value)}
                      aria-label="Month"
                      className="w-full pl-10 rounded-md border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm h-10 appearance-none"
                    >
                      <option value="">All Months</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {new Date(0, i).toLocaleString("en-US", { month: "long" })}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={nearDraft}
                      onChange={(e) => setNearDraft(e.target.value)}
                      placeholder="Enter city name"
                      aria-label="City"
                      className="w-full pl-10 pr-10 rounded-md border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm h-10"
                    />
                    {nearDraft && (
                      <button type="button" onClick={() => setNearDraft("")} aria-label="Clear city" className="absolute right-2 top-2 p-1 text-gray-500 hover:text-gray-700">
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* From & To Dates */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                    <div className="relative">
                      <input
                        type="month"
                        value={fromDraft}
                        onChange={(e) => setFromDraft(e.target.value)}
                        aria-label="From month"
                        className="w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm h-10 pl-3"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                    <div className="relative">
                      <input
                        type="month"
                        value={toDraft}
                        onChange={(e) => setToDraft(e.target.value)}
                        aria-label="To month"
                        className="w-full rounded-md border border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-sm h-10 pl-3"
                      />
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <button type="button" onClick={handleClear} className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all text-sm">
                    <Trash2 className="w-4 h-4" />
                    Clear All
                  </button>
                  <button type="submit" className="px-6 py-2 bg-indigo-700 text-white rounded-lg font-medium hover:bg-indigo-800 hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm">
                    Apply Filters
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventFilter;