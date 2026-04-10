<script lang="ts">
    import {resolve} from '$app/paths';
    import {Card, CardContent} from "$lib/components/ui/card";
    import {Info, Phone, Mail} from "@lucide/svelte";
    import Whatsapp from '$lib/assets/socials/Whatsapp.svg'

</script>

<section class="section">
    <div class="section-inner">
        <h2>Contact</h2>
        <p>Voor meer informatie of om een afspraak te maken kan je ons bereiken via:</p>
        <ul class="list-none pl-4 border-l-2 border-primary mb-4 space-y-1">
            <li class="flex items-center gap-2">
                <Mail class="h-4 w-4 shrink-0 opacity-80"/>
                <a href="mailto:info@hbvchiron.nl" class="text-primary hover:underline">info@hbvchiron.nl</a>
            </li>
            <li class="flex items-center gap-2">
                <Phone class="h-4 w-4 shrink-0 opacity-80"/>
                <img src={Whatsapp} alt="Whatsapp" class="h-4 w-4 shrink-0 opacity-80 dark:invert"/>
                <a href="tel:+31641807238" class="text-primary hover:underline">06-41807238</a>
            </li>
        </ul>

        <h3 id="locatie">Locatie</h3>
        <p>
            Wij zijn op <a href={resolve('/over-ons#trainingstijden')} class="text-primary hover:underline">trainingstijden</a>
            te vinden in:
        </p>
        <address class="not-italic font-medium pl-4 border-l-2 border-primary mb-8">
            Sporthal de Spreng<br/>
            Vredeveldseweg 57<br/>
            9404 CC Assen
        </address>

        <Card>
            <CardContent class="flex items-start gap-3 text-sm text-muted-foreground">
                <Info class="h-4 w-4 shrink-0 mt-0.5 text-primary"/>
                Wil je langskomen? Neem dan eerst even contact met ons op, dan zorgen we dat iemand je kan ontvangen
            </CardContent>
        </Card>

        <div class="rounded-xl overflow-hidden mt-2 h-72 md:h-96">
            <iframe title="Locatie HBV Chiron"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d600.4431526248835!2d6.58327579260481!3d52.988490999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c82536b3792ac1%3A0x6c729bac650b1a74!2sHBV%20Chiron!5e0!3m2!1sen!2snl!4v1775132980295!5m2!1sen!2snl"
                    width="100%"
                    height="100%"
                    style="border:0"
                    allowfullscreen
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
</section>
