import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function useEventFilters(eventsData = []) {
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

  return {

    // applied values
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

    // setters for applied
    setSearch,
    setType,
    setMonth,
    setNear,
    setFrom,
    setTo,
    // UI

    showFilters,
    setShowFilters,

    // handlers
    handleSubmit,
    handleSearchSubmit,
    handleClear,

    // results
    filteredEvents,
  };
}
