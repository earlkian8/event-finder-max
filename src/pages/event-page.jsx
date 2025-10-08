import { Calendar, Search, MapPin, Sparkles, Clock, Filter as FilterIcon } from 'lucide-react';
import EventFilter from '../components/Events/EventFilter';
import EventHeroSection from '../components/Events/EventHeroSection';
import { eventsData } from '../utils/data';
import EventResultHeader from '../components/Events/EventResultHeader';
import EventGrid from '../components/Events/EventGrid';
import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const EventsPage = () => {

  // Inline of useEventFilters
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get('q') || '');
  const [searchDraft, setSearchDraft] = useState(searchParams.get('q') || '');

  const [typeDraft, setTypeDraft] = useState(searchParams.get('type') || '');
  const [monthDraft, setMonthDraft] = useState(searchParams.get('month') || '');
  const [nearDraft, setNearDraft] = useState(searchParams.get('near') || '');
  const [fromDraft, setFromDraft] = useState(searchParams.get('from') || '');
  const [toDraft, setToDraft] = useState(searchParams.get('to') || '');

  const [type, setType] = useState(searchParams.get('type') || '');
  const [month, setMonth] = useState(searchParams.get('month') || '');
  const [near, setNear] = useState(searchParams.get('near') || '');
  const [from, setFrom] = useState(searchParams.get('from') || '');
  const [to, setTo] = useState(searchParams.get('to') || '');

  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setSearch(searchParams.get('q') || '');
    setSearchDraft(searchParams.get('q') || '');

    setTypeDraft(searchParams.get('type') || '');
    setMonthDraft(searchParams.get('month') || '');
    setNearDraft(searchParams.get('near') || '');
    setFromDraft(searchParams.get('from') || '');
    setToDraft(searchParams.get('to') || '');

    setType(searchParams.get('type') || '');
    setMonth(searchParams.get('month') || '');
    setNear(searchParams.get('near') || '');
    setFrom(searchParams.get('from') || '');
    setTo(searchParams.get('to') || '');
  }, [searchParams]);

  const pushParamsToUrl = (paramsObj) => {
    const newParams = new URLSearchParams();
    if (paramsObj.search) newParams.set('q', paramsObj.search);
    if (paramsObj.type) newParams.set('type', paramsObj.type);
    if (paramsObj.month) newParams.set('month', paramsObj.month);
    if (paramsObj.near) newParams.set('near', paramsObj.near);
    if (paramsObj.from) newParams.set('from', paramsObj.from);
    if (paramsObj.to) newParams.set('to', paramsObj.to);
    setSearchParams(newParams);
  };

  const handleSubmit = (e) => {
    e?.preventDefault?.();
    setShowFilters(false);

    setSearch(searchDraft);
    setType(typeDraft);
    setMonth(monthDraft);
    setNear(nearDraft);
    setFrom(fromDraft);
    setTo(toDraft);
    pushParamsToUrl({ search: searchDraft, type: typeDraft, month: monthDraft, near: nearDraft, from: fromDraft, to: toDraft });
  };

  const handleSearchSubmit = () => {
    setSearch(searchDraft);
    pushParamsToUrl({ search: searchDraft, type, month, near, from, to });
  };

  const handleClear = () => {
    setSearch('');
    setSearchDraft('');

    setTypeDraft('');
    setMonthDraft('');
    setNearDraft('');
    setFromDraft('');
    setToDraft('');

    setType('');
    setMonth('');
    setNear('');
    setFrom('');
    setTo('');
    setSearchParams({});
  };

  const filteredEvents = useMemo(() => {
    return eventsData.filter((ev) => {
      if (search) {
        const q = search.toLowerCase();
        if (!(`${ev.title} ${ev.description}`.toLowerCase().includes(q))) return false;
      }
      if (type) {
        if (ev.type !== type) return false;
      }
      if (month) {
        const eventMonth = new Date(ev.date).getMonth() + 1;
        if (Number(month) !== eventMonth) return false;
      }
      if (near) {
        if (!ev.city.toLowerCase().includes(near.toLowerCase())) return false;
      }
      if (from) {
        const fromDate = new Date(from + '-01');
        const evDate = new Date(ev.date);
        if (evDate < fromDate) return false;
      }
      if (to) {
        const [y, m] = to.split('-');
        const toDate = new Date(`${y}-${m}-01`);
        const evDate = new Date(ev.date);
        const lastDay = new Date(toDate.getFullYear(), toDate.getMonth() + 1, 0);
        if (evDate > lastDay) return false;
      }
      return true;
    });
  }, [eventsData, search, type, month, near, from, to]);

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