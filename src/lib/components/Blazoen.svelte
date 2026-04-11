<script lang="ts">
    export let blazoenen = [
        { top: '25%', left: '10%', size: 900, opacity: 0.5 },
        { top: '75%', left: '95%', size: 900, opacity: 0.5 }
    ];

    const rings = [
        { frac: 1.00, color: '#ffffff' },
        { frac: 0.90, color: '#aaaaaa' },
        { frac: 0.80, color: '#555555' },
        { frac: 0.70, color: '#1a7abf' },
        { frac: 0.60, color: '#1a7abf' },
        { frac: 0.50, color: '#d63a2a' },
        { frac: 0.40, color: '#d63a2a' },
        { frac: 0.30, color: '#f5c800' },
        { frac: 0.20, color: '#f5c800' },
        { frac: 0.10, color: '#f5c800' },
    ];
</script>

{#each blazoenen as blazoen (blazoen.top + blazoen.left)}
    <div class="target-wrap" style="z-index: 0; top:{blazoen.top}; left:{blazoen.left};">
        {#each rings as ring (ring.frac + ring.color)}
            <div
                    class="ring"
                    style="
          width: {blazoen.size * ring.frac}px;
          height: {blazoen.size * ring.frac}px;
          background: {ring.color};
          opacity: {blazoen.opacity + ring.frac * 0.1};
        "
            ></div>
        {/each}
    </div>
{/each}

<style>
    .target-wrap {
        position: absolute;
        pointer-events: none;
        transform: translate(-50%, -50%);
    }
    .ring {
        position: absolute;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        top: 0;
        left: 0;
    }
</style>