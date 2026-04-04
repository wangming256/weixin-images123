# Errors Log

Command failures, exceptions, and unexpected behaviors.

---

## [ERR-20260330-001] daily-hot-api deployment-git-clone

**Logged**: 2026-03-30T08:48:00Z
**Priority**: medium
**Status**: resolved
**Area**: infra

### Summary
Failed to clone DailyHotApi from GitHub due to network connection issues

### Error
```
Attempt 1: direct git clone - HTTP2 framing layer error
Attempt 2: curl download - connection reset by peer, timeout after 1 minute
Attempt 3: GIT_SSL_NO_VERIFY - couldn't connect after 75s
Attempt 4: gitclone.com - same connection error
Attempt 5: ghproxy.net - PROTOCOL_ERROR
Attempt 6: mirror.ghproxy.com - couldn't connect after 75s
```

### Context
- Operation: Deploy daily-hot-news skill, need to clone DailyHotApi backend
- Attempted: 6 different methods (direct clone, multiple mirrors, curl download)
- All failed due to severe network connectivity issues to GitHub

### Suggested Fix
1. User manually downloads DailyHotApi to skills/daily-hot-api/
2. Or retry much later when network connection improves

### Resolution
- **Resolved**: 2026-03-30T09:05:00Z
- **Notes**: User manually downloaded, deployment completed successfully

### Metadata
- Reproducible: yes
- Related Files: skills/daily-hot-news/

## [ERR-20260330-002] subagent-spawn pairing-required

**Logged**: 2026-03-30T11:56:00Z
**Priority**: medium
**Status**: pending
**Area**: infra

### Summary
spawn subagent failed with "gateway closed (1008): pairing required"

### Error
```
gateway closed (1008): pairing required
Gateway target: ws://127.0.0.1:18789
```

### Context
- Operation: spawn recruitment subagent to create 16 subagents
- Gateway shows running but pairing fails
- Possibly need re-pairing or gateway restart

### Suggested Fix
1. Restart openclaw gateway
2. Or check pairing configuration

### Metadata
- Reproducible: yes
- Related Files: openclaw gateway

