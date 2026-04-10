<script>
    import logo from '$lib/assets/Chiron.png'
    import {MapPin, Phone, Mail} from "@lucide/svelte";
    import Facebook from '$lib/assets/socials/Facebook.svg'
    import Instagram from '$lib/assets/socials/Instagram.svg'
</script>

<footer class="border-t bg-secondary">
    <div class="container mx-auto flex flex-wrap gap-8 px-6 py-8 justify-between items-start">

        <!-- Logo + Socials -->
        <div class="flex flex-col gap-3 min-w-45">
            <div class="flex items-center gap-2.5">
                <div class="w-9 h-9 rounded-full bg-white/90 pb-1 shadow-md ring-2 ring-border flex items-center justify-center">
                    <img src={logo} alt="HBV Chiron"/>
                </div>
                <span class="text-base font-medium">HBV Chiron</span>
            </div>
            <p class="text-sm text-muted-foreground max-w-50 leading-relaxed">
                Boogschieten voor iedereen
            </p>
            <div class="flex items-center gap-3">
                <a href="https://www.facebook.com/p/HBVChiron-61552956662317/" target="_blank" rel="noopener noreferrer"
                   class="text-muted-foreground hover:text-foreground transition-colors">
                    <img src={Facebook} alt="Facebook" class="w-4 h-4 opacity-60 dark:invert" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
                   class="text-muted-foreground hover:text-foreground transition-colors">
                    <img src={Instagram} alt="Instagram" class="w-4 h-4 opacity-60 dark:invert" />
                </a>
            </div>
        </div>

        <!-- Adres info -->
        <div class="flex flex-col gap-2.5 min-w-50">
            <p class="text-xs font-medium uppercase tracking-widest text-muted-foreground">Adres</p>

            <address class="not-italic flex items-start gap-2.5">
                <MapPin class="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" />
                <div class="text-sm leading-relaxed">
                    <p>de Spreng</p>
                    <p class="text-muted-foreground">Vredeveldseweg 57</p>
                    <p class="text-muted-foreground">9404 CC Assen</p>
                </div>
            </address>
        </div>

        <!-- Contact info -->
        <div class="flex flex-col gap-2.5 min-w-50">
            <p class="text-xs font-medium uppercase tracking-widest text-muted-foreground">Contact</p>

            <div class="flex items-center gap-2.5">
                <Phone class="w-4 h-4 shrink-0 text-muted-foreground" />
                <a href="tel:+31641807238" class="text-sm hover:text-foreground transition-colors">06-41807238</a>
            </div>

            <div class="flex items-center gap-2.5">
                <Mail class="w-4 h-4 shrink-0 text-muted-foreground" />
                <a href="mailto:info@hbvchiron.nl" class="text-sm text-primary hover:underline">info@hbvchiron.nl</a>
            </div>
        </div>
    </div>
</footer>