import { Calendar, Search, MapPin, Sparkles, Clock, Filter as FilterIcon } from 'lucide-react';
import EventFilter from '../components/Events/EventFilter';
import EventHeroSection from '../components/Events/EventHeroSection';
import { eventsData } from '../utils/data';
import EventResultHeader from '../components/Events/EventResultHeader';
import EventGrid from '../components/Events/EventGrid';
import React from 'react';
import useEventFilters from '../hooks/useEventFilters';

const EventsPage = () => {

  const {
    // applied
    search,
    type,
    month,
    near,
    from,
    to,

    // drafts
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

    // UI
    showFilters,
    setShowFilters,

    // handlers
    handleSubmit,
    handleSearchSubmit,
    handleClear,

    // applied setters
    setSearch,
    setType,
    setMonth,
    setNear,
    setFrom,
    setTo,

    // results
    filteredEvents,
  } = useEventFilters(eventsData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <EventHeroSection />
        <EventFilter
          search={search}
          setSearch={setSearch}
          searchDraft={searchDraft}
          setSearchDraft={setSearchDraft}
          typeDraft={typeDraft}
          setTypeDraft={setTypeDraft}
          monthDraft={monthDraft}
          setMonthDraft={setMonthDraft}
          nearDraft={nearDraft}
          setNearDraft={setNearDraft}
          fromDraft={fromDraft}
          setFromDraft={setFromDraft}
          toDraft={toDraft}
          setToDraft={setToDraft}
          type={type}
          setType={setType}
          month={month}
          setMonth={setMonth}
          near={near}
          setNear={setNear}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
          handleSubmit={handleSubmit}
          handleSearchSubmit={handleSearchSubmit}
          handleClear={handleClear}
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />

        <EventResultHeader eventsData={filteredEvents} />
        <EventGrid eventsData={filteredEvents} />
      </div>
    </div>
  );
};

export default EventsPage;