import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyProjetComponent} from './my-projet/my-projet.component';
import {ProjetCreateComponent} from './projet-create/projet-create.component';
import {ProjetComponent} from './projet.component';
import {RouterModule} from '@angular/router';
import {projetRoutes} from './projet.routes';
import {ProjetListComponent} from './projet-list/projet-list.component';
import {ProjetDetailComponent} from './projet-detail/projet-detail.component';
import {MyDatePickerModule} from 'mydatepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddInfoModalComponent} from './add-info-modal/add-info-modal.component';
import {ProjetBilanFinancierComponent} from './projet-bilan-financier/projet-bilan-financier.component';
import {ProjetBilanRealisationComponent} from './projet-bilan-realisation/projet-bilan-realisation.component';
import {ProjetStatistiqueComponent} from './projet-statistique/projet-statistique.component';
import {ProjetMaitreDoeuvrageComponent} from './projet-maitre-doeuvrage/projet-maitre-doeuvrage.component';
import {ProjetPartenaireComponent} from './projet-partenaire/projet-partenaire.component';
import {SharedModulesModule} from 'src/app/shared-modules/shared-modules.module';
import {MyProjetCreateComponent} from './my-projet-create/my-projet-create.component';
import {ProjetEditComponent} from './projet-edit/projet-edit.component';
import {ProjetMaitreDoeuvreComponent} from './projet-maitre-doeuvre/projet-maitre-doeuvre.component';
import {MesSoustraitrantsComponent} from './mes-soustraitrants/mes-soustraitrants.component';
import {MesPartenairesComponent} from './mes-partenaires/mes-partenaires.component';
import {ProjetEtapesComponent} from './projet-etapes/projet-etapes.component';
import {ProjetCreateMaitredoeuvreComponent} from './projet-create-maitredoeuvre/projet-create-maitredoeuvre.component';
import {ProjetBilanFinanceDetailComponent} from './projet-bilan-finance-detail/projet-bilan-finance-detail.component';
import { ProjetEtapeCreateComponent } from './projet-etape-create/projet-etape-create.component';
import { ProjetEtapeDetailComponent } from './projet-etape-detail/projet-etape-detail.component';
import { DpDatePickerModule } from 'ng2-date-picker';
import { ProjetTacheCreateComponent } from './projet-tache-create/projet-tache-create.component';
import { ProjetTacheUpdateComponent } from './projet-tache-update/projet-tache-update.component';
import { ProjetTacheDetailComponent } from './projet-tache-detail/projet-tache-detail.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ProjetPartenaireCreateComponent } from './projet-partenaire-create/projet-partenaire-create.component';
import { PartenaireCreateFormComponent } from './partenaire-create-form/partenaire-create-form.component';
import { ProjetEntrepriseDetailComponent } from './projet-entreprise-detail/projet-entreprise-detail.component';

@NgModule({
    declarations: [
        MyProjetComponent,
        ProjetCreateComponent,
        ProjetComponent,
        ProjetListComponent,
        ProjetDetailComponent,
        AddInfoModalComponent,
        ProjetBilanFinancierComponent,
        ProjetBilanRealisationComponent,
        ProjetStatistiqueComponent,
        ProjetMaitreDoeuvrageComponent,
        ProjetPartenaireComponent,
        MyProjetCreateComponent,
        ProjetEditComponent,
        ProjetMaitreDoeuvreComponent,
        MesSoustraitrantsComponent,
        MesPartenairesComponent,
        ProjetEtapesComponent,
        ProjetCreateMaitredoeuvreComponent,
        ProjetBilanFinanceDetailComponent,
        ProjetEtapeCreateComponent,
        ProjetEtapeDetailComponent,
        ProjetTacheCreateComponent,
        ProjetTacheUpdateComponent,
        ProjetTacheDetailComponent,
        ProjetPartenaireCreateComponent,
        PartenaireCreateFormComponent,
        ProjetEntrepriseDetailComponent
    ],
    imports: [
        CommonModule, 
        SharedModulesModule, 
        FormsModule, 
        ReactiveFormsModule, 
        MyDatePickerModule,
        DpDatePickerModule,  
        PdfViewerModule, 
        AutocompleteLibModule,
        AngularMultiSelectModule,
        NgMultiSelectDropDownModule.forRoot(),
        RouterModule.forChild(projetRoutes)
    ]
})
export class ProjetModule {
}
