# Learnings

Corrections, insights, and knowledge gaps captured during development.

**Categories**: correction | insight | knowledge_gap | best_practice
**Areas**: frontend | backend | infra | tests | docs | config
**Statuses**: pending | in_progress | resolved | wont_fix | promoted | promoted_to_skill

## Status Definitions

| Status | Meaning |
|--------|---------|
| `pending` | Not yet addressed |
| `in_progress` | Actively being worked on |
| `resolved` | Issue fixed or knowledge integrated |
| `wont_fix` | Decided not to address (reason in Resolution) |
| `promoted` | Elevated to CLAUDE.md, AGENTS.md, or copilot-instructions.md |
| `promoted_to_skill` | Extracted as a reusable skill

## Skill Extraction Fields

When a learning is promoted to a skill, add these fields:

```markdown
**Status**: promoted_to_skill
**Skill-Path**: skills/skill-name
```

Example:
```markdown
## [LRN-20250115-001] best_practice

**Logged**: 2025-01-15T10:00:00Z
**Priority**: high
**Status**: promoted_to_skill
**Skill-Path**: skills/docker-m1-fixes
**Area**: infra

### Summary
Docker build fails on Apple Silicon due to platform mismatch
...
```

---

## [LRN-20260330-001] best_practice

**Logged**: 2026-03-30T08:55:00Z
**Priority**: medium
**Status**: resolved
**Area**: infra

### Summary
PM2 启动 Node.js 服务遇到 EPERM uv_cwd 错误解决方案

### Details
When starting a Node.js service with PM2 using ecosystem.config.cjs, macOS may throw:
```
Error: EPERM: operation not permitted, uv_cwd
```

**Solution**: Instead of using ecosystem.config.cjs with cluster mode, delete the app and restart with:
```bash
pm2 delete app-name
cd /path/to/project
pm2 start npm --name app-name -- start
```
This ensures working directory permissions are handled correctly.

### Suggested Action
Update documentation to recommend this approach for macOS.

### Metadata
- Source: deployment
- Related Files: skills/daily-hot-api/ecosystem.config.cjs
- Tags: pm2, macos, deployment

---
